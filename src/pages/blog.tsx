import { BlogPost } from "../components/blog/blog-post";
import { Container } from "../components/ui/container";

export type BlogPost = {
  id: number;
  title: string;
  text: string;
  date: string;
  tag: string;
  likes: number;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Das Geheimnis der Schwarzen Löcher",
    text: "Schwarze Löcher sind faszinierende Objekte im Universum, die selbst Licht nicht entkommen lassen. Doch wie entstehen sie, und was passiert, wenn man in eines fällt? In diesem Artikel erkläre ich euch die Grundlagen und die neuesten Erkenntnisse aus der Forschung.",
    date: "20.01.2025",
    tag: "Astronomie",
    likes: 45,
  },
  {
    id: 2,
    title: "Die Welt der Quantenphysik",
    text: "Quantenphysik klingt oft wie Magie – Dinge existieren gleichzeitig an mehreren Orten, und Teilchen beeinflussen sich über große Distanzen. Heute tauchen wir in diese spannende Welt ein und klären, was diese Theorie für unsere moderne Technologie bedeutet.",
    date: "15.01.2025",
    tag: "Physik",
    likes: 30,
  },
  {
    id: 3,
    title: "Wie Korallenriffe das Klima schützen",
    text: "Korallenriffe sind nicht nur wunderschön, sondern auch essenziell für das Gleichgewicht unseres Planeten. Sie schützen Küsten, speichern CO₂ und bieten Lebensraum für tausende Arten. Doch sie sind in Gefahr. Hier erfährst du, warum wir sie retten müssen.",
    date: "10.01.2025",
    tag: "Umwelt",
    likes: 52,
  },
  {
    id: 4,
    title: "CRISPR: Die Revolution der Genetik",
    text: "Mit der Genschere CRISPR können wir DNA präzise bearbeiten. Doch welche Möglichkeiten eröffnet uns diese Technologie, und welche ethischen Fragen wirft sie auf? Ein spannender Blick in die Zukunft der Biotechnologie.",
    date: "05.01.2025",
    tag: "Biologie",
    likes: 40,
  },
  {
    id: 5,
    title: "Warum Bienen so wichtig sind",
    text: "Bienen sind mehr als Honiglieferanten. Ohne ihre Bestäubungsarbeit würden viele unserer Lebensmittel verschwinden. Doch Bienenpopulationen schrumpfen. Was können wir tun, um sie zu schützen? Finde es hier heraus.",
    date: "01.01.2025",
    tag: "Umwelt",
    likes: 65,
  },
  {
    id: 6,
    title: "Die Jagd nach außerirdischem Leben",
    text: "Sind wir allein im Universum? Die Suche nach außerirdischem Leben beschäftigt Wissenschaftler seit Jahrzehnten. Von Mars-Rovern bis zu Teleskopen, die Exoplaneten untersuchen – die Jagd nach Leben geht weiter.",
    date: "18.12.2024",
    tag: "Astronomie",
    likes: 50,
  },
];

export function Blog() {
  return (
    <div className="min-h-screen w-full bg-slate-950 pt-16">
      <Container className="mt-12 w-[calc(100%-2rem)] bg-neutral-100 text-neutral-900">
        <h1 className="mb-8 w-full text-end font-mono text-4xl font-bold tracking-wider">
          {"//unser blog"}
        </h1>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </ul>
      </Container>
    </div>
  );
}
