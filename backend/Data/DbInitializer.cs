
using CatalogoCursos.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace CatalogoCursos.Api.Data;

public static class DbInitializer
{
    public static async Task InitializeAsync(
        AppDbContext context,
        CancellationToken cancellationToken = default)
    {
        // Categorias
        await EnsureExistsAsync(
            context.Categorias,
            "Matemática",
            nome => new Categoria
            {
                Nome = nome,
                Descricao = "Cursos de matemática aplicada.",
                Ativo = true
            },
            cancellationToken);

        await EnsureExistsAsync(
            context.Categorias,
            "Ciências da Natureza",
            nome => new Categoria
            {
                Nome = nome,
                Descricao = "Cursos de ciências aplicadas à indústria.",
                Ativo = true
            },
            cancellationToken);

        await EnsureExistsAsync(
            context.Categorias,
            "Tecnologia e Inovação",
            nome => new Categoria
            {
                Nome = nome,
                Descricao = "Cursos de tecnologia e inovação industrial.",
                Ativo = true
            },
            cancellationToken);

        // Modalidades
        await EnsureExistsAsync(
            context.Modalidades,
            "Ensino a distância",
            nome => new Modalidade
            {
                Nome = nome,
                Descricao = "Curso realizado pela internet.",
                Ativo = true
            },
            cancellationToken);

        await EnsureExistsAsync(
            context.Modalidades,
            "Presencial",
            nome => new Modalidade
            {
                Nome = nome,
                Descricao = "Curso realizado presencialmente.",
                Ativo = true
            },
            cancellationToken);

        // Status dos cursos
        await EnsureExistsAsync(
            context.StatusCursos,
            "Disponível",
            nome => new StatusCurso
            {
                Nome = nome,
                Descricao = "Curso disponível para consulta e matrícula.",
                Ativo = true
            },
            cancellationToken);

        await EnsureExistsAsync(
            context.StatusCursos,
            "Em breve",
            nome => new StatusCurso
            {
                Nome = nome,
                Descricao = "Curso anunciado, ainda não disponível.",
                Ativo = true
            },
            cancellationToken);

        await EnsureExistsAsync(
            context.StatusCursos,
            "Encerrado",
            nome => new StatusCurso
            {
                Nome = nome,
                Descricao = "Curso sem novas matrículas.",
                Ativo = true
            },
            cancellationToken);

        await context.SaveChangesAsync(cancellationToken);

        // Cursos
        var cursos = new[]
        {
            new Curso
            {
                NomeCompleto = "Matemática para a Precisão: Medidas e Escalas na Metalurgia",
                NomeBreve = "Medidas e Escalas na Metalurgia",
                Descricao = "Aplicação de grandezas, proporções e escalas em processos de corte, furação e usinagem.",
                CategoriaId = await ObterCategoriaIdAsync(
                    context, "Matemática", cancellationToken),
                ModalidadeId = await ObterModalidadeIdAsync(
                    context, "Ensino a distância", cancellationToken),
                StatusCursoId = await ObterStatusIdAsync(
                    context, "Disponível", cancellationToken),
                CargaHorariaHoras = 40,
                PublicoAlvo = "Estudantes e profissionais da indústria metalúrgica.",
                ImagemUrl = "/images/cursos/medidas-escalas.jpg",
                DataDisponibilizacao = new DateOnly(2026, 1, 5)
            },
            new Curso
            {
                NomeCompleto = "Geometria e Modelagem no Design Têxtil",
                NomeBreve = "Geometria no Design Têxtil",
                Descricao = "Explora formas geométricas, simetria e padrões matemáticos presentes em tecidos e estampas.",
                CategoriaId = await ObterCategoriaIdAsync(
                    context, "Matemática", cancellationToken),
                ModalidadeId = await ObterModalidadeIdAsync(
                    context, "Presencial", cancellationToken),
                StatusCursoId = await ObterStatusIdAsync(
                    context, "Disponível", cancellationToken),
                CargaHorariaHoras = 30,
                PublicoAlvo = "Estudantes e profissionais do setor têxtil.",
                ImagemUrl = "/images/cursos/geometria-textil.jpg"
            },
            new Curso
            {
                NomeCompleto = "Estatística e Controle de Qualidade na Produção",
                NomeBreve = "Estatística na Produção",
                Descricao = "Leitura e interpretação de dados de controle de qualidade e produtividade.",
                CategoriaId = await ObterCategoriaIdAsync(
                    context, "Matemática", cancellationToken),
                ModalidadeId = await ObterModalidadeIdAsync(
                    context, "Ensino a distância", cancellationToken),
                StatusCursoId = await ObterStatusIdAsync(
                    context, "Em breve", cancellationToken),
                CargaHorariaHoras = 24,
                PublicoAlvo = "Profissionais de produção e controle de qualidade.",
                ImagemUrl = "/images/cursos/estatistica-producao.jpg"
            },
            new Curso
            {
                NomeCompleto = "Física do Movimento e da Energia na Metalurgia",
                NomeBreve = "Física na Metalurgia",
                Descricao = "Estudo de forças, atrito, calor e energia em máquinas, fornos e prensas.",
                CategoriaId = await ObterCategoriaIdAsync(
                    context, "Ciências da Natureza", cancellationToken),
                ModalidadeId = await ObterModalidadeIdAsync(
                    context, "Presencial", cancellationToken),
                StatusCursoId = await ObterStatusIdAsync(
                    context, "Disponível", cancellationToken),
                CargaHorariaHoras = 40,
                PublicoAlvo = "Estudantes e profissionais da indústria metalúrgica.",
                ImagemUrl = "/images/cursos/fisica-metalurgia.jpg"
            },
            new Curso
            {
                NomeCompleto = "Química e Sustentabilidade",
                NomeBreve = "Química e Sustentabilidade",
                Descricao = "Estudo das reações químicas envolvidas na tinturaria e acabamento de tecidos.",
                CategoriaId = await ObterCategoriaIdAsync(
                    context, "Ciências da Natureza", cancellationToken),
                ModalidadeId = await ObterModalidadeIdAsync(
                    context, "Ensino a distância", cancellationToken),
                StatusCursoId = await ObterStatusIdAsync(
                    context, "Encerrado", cancellationToken),
                CargaHorariaHoras = 20,
                PublicoAlvo = "Estudantes e profissionais do setor têxtil.",
                ImagemUrl = "/images/cursos/quimica-sustentabilidade.jpg"
            },
            new Curso
            {
                NomeCompleto = "Ciência dos Materiais na Metalurgia",
                NomeBreve = "Materiais na Metalurgia",
                Descricao = "Conceitos básicos de estrutura, resistência e propriedades dos metais.",
                CategoriaId = await ObterCategoriaIdAsync(
                    context, "Ciências da Natureza", cancellationToken),
                ModalidadeId = await ObterModalidadeIdAsync(
                    context, "Presencial", cancellationToken),
                StatusCursoId = await ObterStatusIdAsync(
                    context, "Disponível", cancellationToken),
                CargaHorariaHoras = 32,
                PublicoAlvo = "Estudantes e profissionais da indústria metalúrgica.",
                ImagemUrl = "/images/cursos/ciencia-materiais.jpg"
            },
            new Curso
            {
                NomeCompleto = "Introdução à Automação Industrial",
                NomeBreve = "Automação Industrial",
                Descricao = "Conceitos fundamentais de automação industrial, sensores, atuadores e sistemas de controle aplicados aos processos produtivos.",
                CategoriaId = await ObterCategoriaIdAsync(
                    context, "Tecnologia e Inovação", cancellationToken),
                ModalidadeId = await ObterModalidadeIdAsync(
                    context, "Ensino a distância", cancellationToken),
                StatusCursoId = await ObterStatusIdAsync(
                    context, "Disponível", cancellationToken),
                CargaHorariaHoras = 32,
                PublicoAlvo = "Estudantes e profissionais interessados em tecnologia e automação industrial.",
                ImagemUrl = "/images/cursos/automacao-industrial.jpg"
            }
        };

        foreach (var curso in cursos)
        {
            var jaExiste = await context.Cursos
                .AnyAsync(
                    c => c.NomeCompleto == curso.NomeCompleto,
                    cancellationToken);

            if (!jaExiste)
            {
                context.Cursos.Add(curso);
            }
        }

        await context.SaveChangesAsync(cancellationToken);

        await SeedConteudoAsync(context, cancellationToken);
    }

    private static async Task EnsureExistsAsync<TEntity>(
        DbSet<TEntity> dbSet,
        string nome,
        Func<string, TEntity> factory,
        CancellationToken cancellationToken)
        where TEntity : class
    {
        var existe = await dbSet.AnyAsync(
            entity => EF.Property<string>(entity, "Nome") == nome,
            cancellationToken);

        if (!existe)
        {
            dbSet.Add(factory(nome));
        }
    }

    private static async Task<int> ObterCategoriaIdAsync(
        AppDbContext context,
        string nome,
        CancellationToken cancellationToken)
    {
        return await context.Categorias
            .Where(c => c.Nome == nome)
            .Select(c => c.Id)
            .SingleAsync(cancellationToken);
    }

    private static async Task<int> ObterModalidadeIdAsync(
        AppDbContext context,
        string nome,
        CancellationToken cancellationToken)
    {
        return await context.Modalidades
            .Where(m => m.Nome == nome)
            .Select(m => m.Id)
            .SingleAsync(cancellationToken);
    }

    private static async Task<int> ObterStatusIdAsync(
        AppDbContext context,
        string nome,
        CancellationToken cancellationToken)
    {
        return await context.StatusCursos
            .Where(s => s.Nome == nome)
            .Select(s => s.Id)
            .SingleAsync(cancellationToken);
    }

    private sealed record ModuloSeed(
        string Curso,
        string Nome,
        string Descricao,
        (string Nome, string Descricao)[] Aulas
    );

    private static async Task SeedConteudoAsync(
        AppDbContext context,
        CancellationToken cancellationToken)
    {
        var modulos = new[]
        {
            new ModuloSeed(
                "Matemática para a Precisão: Medidas e Escalas na Metalurgia",
                "Grandezas e unidades de medida",
                "Fundamentos de medição aplicados à metalurgia.",
                new[]
                {
                    ("Unidades de comprimento na indústria",
                     "Conheça as unidades de comprimento usadas em processos industriais."),
                    ("Conversão de milímetros e centímetros",
                     "Aprenda a converter unidades para realizar medições precisas.")
                }
            ),
            new ModuloSeed(
                "Matemática para a Precisão: Medidas e Escalas na Metalurgia",
                "Proporções e escalas",
                "Aplicação de proporções e escalas em desenhos técnicos.",
                new[]
                {
                    ("Proporções aplicadas à metalurgia",
                     "Entenda como proporções auxiliam nos cálculos de fabricação."),
                    ("Interpretação de escalas técnicas",
                     "Aprenda a interpretar dimensões em desenhos técnicos.")
                }
            ),
            new ModuloSeed(
                "Geometria e Modelagem no Design Têxtil",
                "Formas geométricas",
                "Aplicação de conceitos geométricos ao design têxtil.",
                new[]
                {
                    ("Formas geométricas nos tecidos",
                     "Identifique formas geométricas em padrões têxteis."),
                    ("Simetria e composição visual",
                     "Explore a simetria na criação de estampas.")
                }
            ),
            new ModuloSeed(
                "Geometria e Modelagem no Design Têxtil",
                "Padrões e modelagem",
                "Estudo de padrões matemáticos usados na criação têxtil.",
                new[]
                {
                    ("Repetição de padrões",
                     "Compreenda como construir padrões repetitivos."),
                    ("Geometria aplicada às estampas",
                     "Relacione figuras geométricas com composições têxteis.")
                }
            ),
            new ModuloSeed(
                "Estatística e Controle de Qualidade na Produção",
                "Fundamentos de estatística",
                "Conceitos estatísticos aplicados à produção industrial.",
                new[]
                {
                    ("Leitura de tabelas e gráficos",
                     "Interprete dados apresentados em tabelas e gráficos."),
                    ("Média e variação de resultados",
                     "Conheça medidas utilizadas na análise de resultados.")
                }
            ),
            new ModuloSeed(
                "Estatística e Controle de Qualidade na Produção",
                "Qualidade e produtividade",
                "Análise de indicadores para acompanhamento da produção.",
                new[]
                {
                    ("Indicadores de qualidade",
                     "Conheça indicadores usados no controle de qualidade."),
                    ("Interpretação de dados produtivos",
                     "Utilize dados para identificar oportunidades de melhoria.")
                }
            ),
            new ModuloSeed(
                "Física do Movimento e da Energia na Metalurgia",
                "Forças e movimento",
                "Estudo de forças e movimento em máquinas industriais.",
                new[]
                {
                    ("Forças aplicadas às máquinas",
                     "Identifique forças presentes nos equipamentos industriais."),
                    ("Atrito e movimento",
                     "Entenda os efeitos do atrito nos processos mecânicos.")
                }
            ),
            new ModuloSeed(
                "Física do Movimento e da Energia na Metalurgia",
                "Calor e energia",
                "Aplicações de energia térmica em processos metalúrgicos.",
                new[]
                {
                    ("Temperatura e transferência de calor",
                     "Conheça os princípios de transferência de calor."),
                    ("Energia em fornos e prensas",
                     "Explore aplicações de energia em equipamentos industriais.")
                }
            ),
            new ModuloSeed(
                "Química e Sustentabilidade",
                "Fundamentos de química",
                "Conceitos químicos aplicados aos processos têxteis.",
                new[]
                {
                    ("Substâncias e misturas",
                     "Diferencie substâncias e misturas usadas na indústria."),
                    ("Transformações químicas",
                     "Identifique transformações químicas em processos produtivos.")
                }
            ),
            new ModuloSeed(
                "Química e Sustentabilidade",
                "Processos sustentáveis",
                "Relação entre processos químicos e sustentabilidade.",
                new[]
                {
                    ("Química na tinturaria",
                     "Conheça processos químicos utilizados no tingimento."),
                    ("Redução de resíduos industriais",
                     "Explore práticas para reduzir resíduos na produção.")
                }
            ),
            new ModuloSeed(
                "Ciência dos Materiais na Metalurgia",
                "Estrutura dos materiais",
                "Introdução à estrutura e composição dos metais.",
                new[]
                {
                    ("Estrutura dos metais",
                     "Conheça características básicas da estrutura metálica."),
                    ("Classificação dos materiais",
                     "Identifique diferentes classes de materiais industriais.")
                }
            ),
            new ModuloSeed(
                "Ciência dos Materiais na Metalurgia",
                "Propriedades e resistência",
                "Estudo das propriedades relevantes para aplicações industriais.",
                new[]
                {
                    ("Dureza e resistência",
                     "Compreenda propriedades mecânicas dos materiais."),
                    ("Seleção de materiais",
                     "Relacione propriedades dos materiais às suas aplicações.")
                }
            ),
            new ModuloSeed(
                "Introdução à Automação Industrial",
                "Sensores e atuadores",
                "Componentes fundamentais dos sistemas de automação.",
                new[]
                {
                    ("Introdução aos sensores",
                     "Conheça sensores utilizados na automação industrial."),
                    ("Atuadores nos processos produtivos",
                     "Entenda como atuadores executam ações em sistemas industriais.")
                }
            ),
            new ModuloSeed(
                "Introdução à Automação Industrial",
                "Sistemas de controle",
                "Fundamentos de controle e monitoramento industrial.",
                new[]
                {
                    ("Princípios de controle industrial",
                     "Conheça conceitos básicos de sistemas de controle."),
                    ("Automação na produção",
                     "Explore aplicações da automação em processos produtivos.")
                }
            )
        };

        // Cada curso possui dois módulos, com ordem 1 e 2.
        for (var indice = 0; indice < modulos.Length; indice++)
        {
            var item = modulos[indice];

            var curso = await context.Cursos
                .SingleAsync(
                    c => c.NomeCompleto == item.Curso,
                    cancellationToken);

            var modulo = await context.Modulos
                .Include(m => m.Aulas)
                .SingleOrDefaultAsync(
                    m => m.CursoId == curso.Id && m.Nome == item.Nome,
                    cancellationToken);

            if (modulo is null)
            {
                modulo = new Modulo
                {
                    Nome = item.Nome,
                    Descricao = item.Descricao,
                    Ordem = indice % 2 + 1,
                    CursoId = curso.Id,
                    Curso = curso
                };

                context.Modulos.Add(modulo);
            }

            for (var i = 0; i < item.Aulas.Length; i++)
            {
                var aulaSeed = item.Aulas[i];

                var aulaExiste = modulo.Aulas.Any(
                    a => a.Nome == aulaSeed.Nome);

                if (!aulaExiste)
                {
                    var aula = new Aula
                    {
                        Nome = aulaSeed.Nome,
                        Descricao = aulaSeed.Descricao,
                        Ordem = i + 1,
                        Modulo = modulo
                    };

                    modulo.Aulas.Add(aula);
                }
            }
        }

        await context.SaveChangesAsync(cancellationToken);
    }
}
