import React, { useState, useMemo, useRef, useEffect } from "react";
import { getAllCases, searchPosts, getPostsMetadata, MarkdownPost } from "@/lib/markdown";
import { MarkdownPostCard } from "@/components/markdown/MarkdownPostCard";
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import { Search, ChevronDown, X, LayoutGrid, Table, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const ALL = "Todos";

function unique(cases: MarkdownPost[], key: "pilar" | "oferta" | "setor"): string[] {
  const s = new Set<string>();
  cases.forEach((c) => c[key] && s.add(c[key]!));
  return Array.from(s).sort();
}

/* ── Dropdown filter ── */
interface DropdownProps {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  color?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, value, options, onChange, color }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const active = value !== ALL;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
          active
            ? "bg-primary text-primary-foreground border-primary shadow-md"
            : "bg-card border-border/50 text-foreground hover:border-primary/40 hover:bg-card/80"
        }`}
      >
        <span className="text-muted-foreground text-xs font-normal">{label}:</span>
        <span className="max-w-[120px] truncate">{value}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 min-w-[200px] bg-card border border-border/50 rounded-xl shadow-xl z-50 py-1 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
          <button
            onClick={() => { onChange(ALL); setOpen(false); }}
            className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
              value === ALL ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted/50"
            }`}
          >
            Todos
          </button>
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                value === opt ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted/50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Cases = () => {
  const cases = getAllCases();
  const [searchTerm, setSearchTerm] = useState("");
  const [pilar, setPilar] = useState(ALL);
  const [oferta, setOferta] = useState(ALL);
  const [setor, setSetor] = useState(ALL);
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  const pilares = useMemo(() => unique(cases, "pilar"), [cases]);
  const ofertas = useMemo(() => unique(cases, "oferta"), [cases]);
  const setores = useMemo(() => unique(cases, "setor"), [cases]);

  const activeCount = [pilar, oferta, setor].filter((v) => v !== ALL).length + (searchTerm ? 1 : 0);

  const filtered = useMemo(() => {
    let r = cases;
    if (searchTerm) r = searchPosts(r, searchTerm);
    if (pilar !== ALL) r = r.filter((c) => c.pilar === pilar);
    if (oferta !== ALL) r = r.filter((c) => c.oferta === oferta);
    if (setor !== ALL) r = r.filter((c) => c.setor === setor);
    // Super Cases primeiro
    r = [...r].sort((a, b) => {
      const aSuper = a.tags?.includes("Super Case") ? 1 : 0;
      const bSuper = b.tags?.includes("Super Case") ? 1 : 0;
      return bSuper - aSuper;
    });
    return r;
  }, [cases, searchTerm, pilar, oferta, setor]);

  const metadata = useMemo(() => getPostsMetadata(filtered), [filtered]);

  const clear = () => { setSearchTerm(""); setPilar(ALL); setOferta(ALL); setSetor(ALL); };

  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader />

      {/* Hero */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex flex-col overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="absolute -top-20 -right-20 sm:-top-32 sm:-right-32 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 sm:-bottom-32 sm:-left-32 w-[350px] sm:w-[500px] md:w-[700px] h-[350px] sm:h-[500px] md:h-[700px] bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="flex-1 flex items-center relative z-10 pt-40 sm:pt-44 md:pt-48 lg:pt-52 pb-12 sm:pb-16 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <div className="backdrop-blur-sm bg-card/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-border/20 shadow-2xl">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold mb-4">
                  Portfólio
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 text-foreground">
                  Cases de Transformação Digital
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6">
                  Descubra como revolucionamos negócios através de soluções tecnológicas inovadoras que geram resultados mensuráveis
                </p>
                <div className="flex items-center justify-center gap-4 md:gap-6 opacity-70">
                  <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
                  <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-medium">Resultados Comprovados</p>
                  <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="relative bg-background py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 rounded-full text-accent text-xs sm:text-sm font-semibold mb-4">
              Explore
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
              Nossos Cases
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cada projeto conta uma história única de transformação e inovação
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/20 shadow-xl p-6 sm:p-8 md:p-10">
            {/* Filter bar — single compact row */}
            <div className="flex flex-col gap-4 mb-8">
              {/* Search + dropdowns */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Buscar cases..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-card border border-border/50 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <Dropdown label="Pilar" value={pilar} options={pilares} onChange={setPilar} />
                <Dropdown label="Oferta" value={oferta} options={ofertas} onChange={setOferta} />
                <Dropdown label="Setor" value={setor} options={setores} onChange={setSetor} />

                {/* View mode toggle */}
                <div className="flex items-center border border-border/50 rounded-xl overflow-hidden ml-auto">
                  <button
                    onClick={() => setViewMode("cards")}
                    className={`flex items-center gap-1.5 px-3 py-2.5 text-sm transition-all ${
                      viewMode === "cards"
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-muted-foreground hover:text-foreground"
                    }`}
                    aria-label="Visualização em cards"
                  >
                    <LayoutGrid className="h-4 w-4" />
                    <span className="hidden sm:inline">Cards</span>
                  </button>
                  <button
                    onClick={() => setViewMode("table")}
                    className={`flex items-center gap-1.5 px-3 py-2.5 text-sm transition-all ${
                      viewMode === "table"
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-muted-foreground hover:text-foreground"
                    }`}
                    aria-label="Visualização em tabela"
                  >
                    <Table className="h-4 w-4" />
                    <span className="hidden sm:inline">Tabela</span>
                  </button>
                </div>
              </div>

              {/* Active filters summary */}
              {activeCount > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-muted-foreground">Filtros ativos:</span>
                  {searchTerm && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium">
                      "{searchTerm}"
                      <button onClick={() => setSearchTerm("")} className="hover:text-primary/70"><X className="h-3 w-3" /></button>
                    </span>
                  )}
                  {pilar !== ALL && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium">
                      {pilar}
                      <button onClick={() => setPilar(ALL)} className="hover:text-primary/70"><X className="h-3 w-3" /></button>
                    </span>
                  )}
                  {oferta !== ALL && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium">
                      {oferta}
                      <button onClick={() => setOferta(ALL)} className="hover:text-primary/70"><X className="h-3 w-3" /></button>
                    </span>
                  )}
                  {setor !== ALL && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium">
                      {setor}
                      <button onClick={() => setSetor(ALL)} className="hover:text-primary/70"><X className="h-3 w-3" /></button>
                    </span>
                  )}
                  <button onClick={clear} className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2">
                    Limpar tudo
                  </button>
                </div>
              )}
            </div>

            {/* Count */}
            <p className="text-sm text-muted-foreground mb-6">
              {filtered.length} {filtered.length === 1 ? "case encontrado" : "cases encontrados"}
            </p>

            {/* Grid / Table */}
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg mb-2">Nenhum case encontrado.</p>
                <button onClick={clear} className="text-primary text-sm hover:underline">Limpar filtros</button>
              </div>
            ) : viewMode === "cards" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {metadata.map((post) => (
                  <MarkdownPostCard key={post.slug} post={post} routePrefix="/cases" />
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-border/50">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50 border-b border-border/50">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Logo</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Case</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden md:table-cell">Pilar</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden lg:table-cell">Oferta</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden sm:table-cell">Setor</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden sm:table-cell">Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((post) => {
                      const isSuperCase = post.tags?.includes("Super Case");
                      return (
                      <tr key={post.slug} className={`border-b border-border/30 hover:bg-muted/30 transition-colors ${isSuperCase ? 'bg-accent/[0.03]' : ''}`}>
                        <td className="px-4 py-3">
                          <Link to={`/cases/${post.slug}`} className="flex items-center gap-2">
                            {post.featuredImage ? (
                              <img src={post.featuredImage} alt="" className="h-8 w-14 object-contain" loading="lazy" />
                            ) : (
                              <div className="h-8 w-14 bg-muted rounded" />
                            )}
                          </Link>
                        </td>
                        <td className="px-4 py-3">
                          <Link to={`/cases/${post.slug}`} className="hover:text-primary transition-colors">
                            <div className="flex items-center gap-2">
                              <p className="font-medium line-clamp-1">{post.title}</p>
                              {isSuperCase && (
                                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold text-accent bg-accent/10 flex-shrink-0">
                                  <Sparkles className="w-2.5 h-2.5" />
                                  Super
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{post.excerpt}</p>
                          </Link>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{post.pilar || "—"}</td>
                        <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">{post.oferta || "—"}</td>
                        <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{post.setor || "—"}</td>
                        <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell whitespace-nowrap">
                          {format(new Date(post.date), "MMM yyyy", { locale: ptBR })}
                        </td>
                      </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cases;
