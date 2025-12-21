import type { FAQItem } from "@/components/faq"

export const faqCaractere: FAQItem[] = [
  {
    question: "Le caractère du Teckel",
    answer: (
      <div className="space-y-3">
        <p>
          Intelligent, sensible et expressif, le teckel a une forte personnalité tout en restant profondément attaché
          à son humain. Observateur et très présent dans la relation, il crée un lien étroit avec son foyer lorsqu&apos;il
          est élevé avec cohérence et respect.
        </p>
      </div>
    ),
  },
  {
    question: "Un chien facile à éduquer",
    answer: (
      <div className="space-y-3">
        <p>
          Contrairement aux idées reçues, le teckel apprend vite dès lors que l&apos;approche reste claire et bienveillante.
          Il coopère volontiers quand la relation de confiance est installée.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Éducation cohérente</li>
          <li>Approche positive</li>
          <li>Répétition régulière</li>
        </ul>
        <p>Les méthodes douces donnent d&apos;excellents résultats pour la propreté, le rappel et les règles de vie.</p>
      </div>
    ),
  },
  {
    question: "Compatibilité avec les enfants",
    answer: (
      <div className="space-y-3">
        <p>
          Le teckel cohabite très bien avec les enfants si les interactions sont encadrées et respectueuses. Il apprécie
          les jeux calmes et les moments de complicité.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Éviter de le porter brusquement</li>
          <li>Toujours soutenir le dos et l'arrière-train</li>
          <li>Apprendre aux enfants à ne pas le faire sauter</li>
        </ul>
        <p>Ces gestes simples protègent sa colonne et son bien-être.</p>
      </div>
    ),
  },
  {
    question: "Compatibilité avec les chats et autres animaux",
    answer: (
      <div className="space-y-3">
        <p>
          Bien socialisé, le teckel vit sereinement avec les chats et les autres animaux du foyer. Une socialisation
          précoce favorise des relations calmes et équilibrées.
        </p>
        <p>
          Son instinct de chasse peut s&apos;exprimer face à de petits animaux inconnus : présentez-les progressivement
          et sous contrôle.
        </p>
      </div>
    ),
  },
  {
    question: "Alimentation : équilibre et vigilance",
    answer: (
      <div className="space-y-3">
        <p>
          Gourmand par nature, le teckel a besoin d&apos;une alimentation de qualité, adaptée à son format et à son
          activité, pour maintenir un poids stable.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Gamelles anti-glouton pour canaliser les repas et aider l&apos;éducation</li>
          <li>Croquettes françaises BAB'IN adulte énergie (riches en protéines, peu de céréales)</li>
          <li>Surveillance du poids pour protéger son dos et ses articulations</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Habitudes et besoins quotidiens",
    answer: (
      <div className="space-y-3">
        <p>
          Il aime les routines, les balades régulières et la proximité avec son humain. Malgré sa petite taille, il a
          besoin d&apos;exercices modérés et d&apos;activités mentales pour rester équilibré.
        </p>
      </div>
    ),
  },
  {
    question: "Sensibilité au froid : manteau recommandé",
    answer: (
      <div className="space-y-3">
        <p>
          Proche du sol et souvent à poil court, le teckel est sensible au froid, à l&apos;humidité et au vent. Un manteau
          est vivement recommandé dans ces conditions.
        </p>
        <p>
          Il doit dormir à l&apos;intérieur la nuit et ne pas être exposé à des températures négatives, surtout pour les
          formats Miniature et Kaninchen.
        </p>
      </div>
    ),
  },
  {
    question: "Soins, prévention et assurance santé",
    answer: (
      <div className="space-y-3">
        <p>Des soins simples mais réguliers protègent sa santé tout au long de sa vie.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Suivi du poids et attention à la colonne vertébrale</li>
          <li>Entretien des griffes et hygiène dentaire</li>
          <li>Assurance santé vivement recommandée pour anticiper les frais vétérinaires</li>
        </ul>
      </div>
    ),
  },
]

export const faqTailles: FAQItem[] = [
  {
    question: "Les 3 tailles du Teckel (Standard, Miniature, Kaninchen)",
    answer: (
      <div className="space-y-3">
        <p>
          La taille est définie par le périmètre thoracique à l&apos;âge adulte (et non la hauteur au garrot). Chaque
          format conserve le caractère typique du teckel : intelligence, courage et attachement à l&apos;humain.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Standard :</strong> plus de 35 cm, jusqu&apos;à ~9 kg. Puissant et endurant, il vient de la chasse au
            blaireau ou au renard.
          </li>
          <li>
            <strong>Miniature :</strong> 30 à 35 cm, environ 4 à 6 kg. Équilibre entre robustesse et format réduit,
            parfait en famille ou en appartement.
          </li>
          <li>
            <strong>Kaninchen :</strong> moins de 30 cm, ~2,5 à 4 kg. Le plus petit et le plus rare, initialement
            sélectionné pour la chasse au lapin, très proche de l&apos;humain.
          </li>
        </ul>
        <p>Le choix dépend du mode de vie et des attentes de chaque adoptant.</p>
      </div>
    ),
  },
]

export const faqHistoire: FAQItem[] = [
  {
    question: "Un peu d'histoire : des terriers à la vie de famille",
    answer: (
      <div className="space-y-3">
        <p>
          Race ancienne née en Allemagne, le teckel (Dachs + Hund, « chien de blaireau ») a été sélectionné pour la
          chasse en terrier : corps long, pattes courtes et poitrail puissant pour suivre le gibier sous terre.
        </p>
        <p>
          Au XIXe siècle, il séduit au-delà de la chasse et devient compagnon de famille. La FCI fixe les standards
          (tailles, variétés de poil et couleurs), permettant de préserver la race tout en encadrant la sélection.
        </p>
        <p>
          Aujourd&apos;hui, c&apos;est un chien populaire, loyal et expressif, qui a gardé le courage de ses ancêtres tout en
          s&apos;adaptant à la vie moderne.
        </p>
      </div>
    ),
  },
]

export const faqPoil: FAQItem[] = [
  {
    question: "Les différentes variétés de poil du Teckel",
    answer: (
      <div className="space-y-4">
        <p>
          Le teckel existe en poil ras, poil long et poil dur. Le tempérament reste le même ; seules texture et entretien
          changent.
        </p>
        <div className="space-y-2">
          <p className="font-semibold">🐾 Teckel à poil ras</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Poil court, lisse, plaqué au corps ; entretien très facile.</li>
            <li>Mue légère mais régulière.</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="font-semibold">🐾 Teckel à poil long</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Poil soyeux avec franges aux oreilles, poitrail et queue.</li>
            <li>Brossage régulier pour éviter les nœuds ; mue plus marquée.</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="font-semibold">🐾 Teckel à poil dur</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Poil dense et rêche avec sous-poil protecteur, barbe et sourcils.</li>
            <li>Entretien spécifique avec épilation (trimming) régulière ; mue limitée si bien entretenu.</li>
          </ul>
        </div>
        <p>
          Le choix dépend du goût esthétique, du temps d&apos;entretien et du mode de vie, pas du caractère du chien.
        </p>
      </div>
    ),
  },
]
