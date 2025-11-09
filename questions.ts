export interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: number;
  imageUrl?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question:
      "In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil …",
    answers: [
      "hier Religionsfreiheit gilt.",
      "die Menschen Steuern zahlen.",
      "die Menschen das Wahlrecht haben.",
      "hier Meinungsfreiheit gilt.",
    ],
    correctAnswer: 3,
  },
  {
    id: 2,
    question:
      "In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am …",
    answers: [
      "Geschichtsunterricht teilnimmt.",
      "Religionsunterricht teilnimmt.",
      "Politikunterricht teilnimmt.",
      "Sprachunterricht teilnimmt.",
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "Deutschland ist ein Rechtsstaat. Was ist damit gemeint?",
    answers: [
      "Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die Gesetze halten.",
      "Der Staat muss sich nicht an die Gesetze halten.",
      "Nur Deutsche müssen die Gesetze befolgen.",
      "Die Gerichte machen die Gesetze.",
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: "Welches Recht gehört zu den Grundrechten in Deutschland?",
    answers: ["Waffenbesitz", "Faustrecht", "Meinungsfreiheit", "Selbstjustiz"],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "Wahlen in Deutschland sind frei. Was bedeutet das?",
    answers: [
      "Man darf Geld annehmen, wenn man dafür einen bestimmten Kandidaten / eine bestimmte Kandidatin wählt.",
      "Der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben.",
      "Nur Personen, die noch nie im Gefängnis waren, dürfen wählen.",
      "Alle wahlberechtigten Personen müssen wählen.",
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: "Wie heißt die deutsche Verfassung?",
    answers: ["Volksgesetz", "Bundesgesetz", "Deutsches Gesetz", "Grundgesetz"],
    correctAnswer: 3,
  },
  {
    id: 7,
    question:
      "Welches Recht gehört zu den Grundrechten, die nach der deutschen Verfassung garantiert werden? Das Recht auf …",
    answers: [
      "Glaubens- und Gewissensfreiheit",
      "Unterhaltung",
      "Arbeit",
      "Wohnung",
    ],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: "Was steht nicht im Grundgesetz von Deutschland?",
    answers: [
      "Die Würde des Menschen ist unantastbar.",
      "Alle sollen gleich viel Geld haben.",
      "Jeder Mensch darf seine Meinung sagen.",
      "Alle sind vor dem Gesetz gleich.",
    ],
    correctAnswer: 1,
  },
  {
    id: 9,
    question:
      "Welches Grundrecht gilt in Deutschland nur für Ausländer / Ausländerinnen? Das Grundrecht auf …",
    answers: [
      "Schutz der Familie",
      "Menschenwürde",
      "Asyl",
      "Meinungsfreiheit",
    ],
    correctAnswer: 2,
  },
  {
    id: 10,
    question: "Was ist mit dem deutschen Grundgesetz vereinbar?",
    answers: [
      "die Prügelstrafe",
      "die Folter",
      "die Todesstrafe",
      "die Geldstrafe",
    ],
    correctAnswer: 3,
  },
  {
    id: 11,
    question: "Wie wird die Verfassung der Bundesrepublik Deutschland genannt?",
    answers: [
      "Grundgesetz",
      "Bundesverfassung",
      "Gesetzbuch",
      "Verfassungsvertrag",
    ],
    correctAnswer: 0,
  },
  {
    id: 12,
    question:
      "Eine Partei im Deutschen Bundestag will die Pressefreiheit abschaffen. Ist das möglich?",
    answers: [
      "Ja, wenn mehr als die Hälfte der Abgeordneten im Bundestag dafür sind.",
      "Ja, aber dazu müssen zwei Drittel der Abgeordneten im Bundestag dafür sein.",
      "Nein, denn die Pressefreiheit ist ein Grundrecht. Sie kann nicht abgeschafft werden.",
      "Nein, denn nur der Bundesrat kann die Pressefreiheit abschaffen.",
    ],
    correctAnswer: 2,
  },
  {
    id: 13,
    question: 'Im Parlament steht der Begriff "Opposition" für…',
    answers: [
      "die regierenden Parteien.",
      "alle Abgeordneten, die nicht zu der Regierungspartei/den Regierungsparteien gehören.",
      "die Fraktion mit den meisten Abgeordneten.",
      "alle Parteien, die bei der letzten Wahl die 5%-Hürde erreichen konnten.",
    ],
    correctAnswer: 1,
  },
  {
    id: 14,
    question: "Meinungsfreiheit in Deutschland heißt, dass ich …",
    answers: [
      "auf Flugblättern falsche Tatsachen behaupten darf.",
      "meine Meinung in Leserbriefen äußern kann.",
      "Nazi-Symbole tragen darf.",
      "Meine Meinung sagen darf, solange ich der Regierung nicht widerspreche.",
    ],
    correctAnswer: 1,
  },
  {
    id: 15,
    question: "Was verbietet das deutsche Grundgesetz?",
    answers: [
      "Militärdienst",
      "Zwangsarbeit",
      "freie Berufswahl",
      "Arbeit im Ausland",
    ],
    correctAnswer: 1,
  },
  {
    id: 16,
    question: "Wann ist die Meinungsfreiheit in Deutschland eingeschränkt?",
    answers: [
      "bei der öffentlichen Verbreitung falscher Behauptungen über einzelne Personen",
      "bei Meinungsäußerungen über die Bundesregierung",
      "bei Diskussionen über Religionen",
      "bei Kritik am Staat",
    ],
    correctAnswer: 0,
  },
  {
    id: 17,
    question: "Die deutschen Gesetze verbieten …",
    answers: [
      "Meinungsfreiheit der Einwohner und Einwohnerinnen.",
      "Petitionen der Bürger und Bürgerinnen.",
      "Versammlungsfreiheit der Einwohner und Einwohnerinnen.",
      "Ungleichbehandlung der Bürger und Bürgerinnen durch den Staat.",
    ],
    correctAnswer: 3,
  },
  {
    id: 18,
    question:
      "Welches Grundrecht ist in Artikel 1 des Grundgesetzes der Bundesrepublik Deutschland garantiert?",
    answers: [
      "die Unantastbarkeit der Menschenwürde",
      "das Recht auf Leben",
      "Religionsfreiheit",
      "Meinungsfreiheit",
    ],
    correctAnswer: 0,
  },
  {
    id: 19,
    question:
      'Was versteht man unter dem Recht der "Freizügigkeit" in Deutschland?',
    answers: [
      "Man darf sich seinen Wohnort selbst aussuchen.",
      "Man kann seinen Beruf wechseln.",
      "Man darf sich für eine andere Religion entscheiden.",
      "Man darf sich in der Öffentlichkeit nur leicht bekleidet bewegen.",
    ],
    correctAnswer: 0,
  },
  {
    id: 20,
    question:
      "Eine Partei in Deutschland verfolgt das Ziel, eine Diktatur zu errichten. Sie ist dann …",
    answers: [
      "tolerant.",
      "rechtsstaatlich orientiert.",
      "gesetzestreu.",
      "verfassungswidrig.",
    ],
    correctAnswer: 3,
  },
  {
    id: 21,
    question: "Welches ist das Wappen der Bundesrepublik Deutschland?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: 0,
    imageUrl: "images/021.png",
  },
  {
    id: 22,
    question: "Was für eine Staatsform hat Deutschland?",
    answers: ["Monarchie", "Diktatur", "Republik", "Fürstentum"],
    correctAnswer: 2,
  },
  {
    id: 23,
    question: "In Deutschland sind die meisten Erwerbstätigen …",
    answers: [
      "bei einer Firma oder Behörde beschäftigt.",
      "in kleinen Familienunternehmen beschäftigt.",
      "ehrenamtlich für ein Bundesland tätig.",
      "selbständig mit einer eigenen Firma tätig.",
    ],
    correctAnswer: 0,
  },
  {
    id: 24,
    question: "Wie viele Bundesländer hat die Bundesrepublik Deutschland?",
    answers: ["14", "15", "16", "17"],
    correctAnswer: 2,
  },
  {
    id: 25,
    question: "Was ist kein Bundesland der Bundesrepublik Deutschland?",
    answers: [
      "Nordrhein-Westfalen",
      "Elsass-Lothringen",
      "Mecklenburg-Vorpommern",
      "Sachsen-Anhalt",
    ],
    correctAnswer: 1,
  },
  {
    id: 26,
    question: "Deutschland ist …",
    answers: [
      "eine kommunistische Republik.",
      "ein demokratischer und sozialer Bundesstaat.",
      "eine kapitalistische und soziale Monarchie.",
      "ein sozialer und sozialistischer Bundesstaat.",
    ],
    correctAnswer: 1,
  },
  {
    id: 27,
    question: "Deutschland ist …",
    answers: [
      "ein sozialistischer Staat.",
      "ein Bundesstaat.",
      "eine Diktatur.",
      "eine Monarchie.",
    ],
    correctAnswer: 1,
  },
  {
    id: 28,
    question: "Wer wählt in Deutschland die Abgeordneten zum Bundestag?",
    answers: [
      "das Militär",
      "die Wirtschaft",
      "das wahlberechtigte Volk",
      "die Verwaltung",
    ],
    correctAnswer: 2,
  },
  {
    id: 29,
    question: "Welches Tier ist das Wappentier der Bundesrepublik Deutschland?",
    answers: ["Löwe", "Adler", "Bär", "Pferd"],
    correctAnswer: 1,
  },
  {
    id: 30,
    question: "Was ist kein Merkmal unserer Demokratie?",
    answers: [
      "regelmäßige Wahlen",
      "Pressezensur",
      "Meinungsfreiheit",
      "verschiedene Parteien",
    ],
    correctAnswer: 1,
  },
  {
    id: 31,
    question:
      "Die Zusammenarbeit von Parteien zur Bildung einer Regierung nennt man in Deutschland …",
    answers: ["Einheit.", "Koalition.", "Ministerium.", "Fraktion."],
    correctAnswer: 1,
  },
  {
    id: 32,
    question: "Was ist keine staatliche Gewalt in Deutschland?",
    answers: ["Gesetzgebung", "Regierung", "Presse", "Rechtsprechung"],
    correctAnswer: 2,
  },
  {
    id: 33,
    question: "Welche Aussage ist richtig? In Deutschland …",
    answers: [
      "sind Staat und Religionsgemeinschaften voneinander getrennt.",
      "bilden die Religionsgemeinschaften den Staat.",
      "ist der Staat abhängig von den Religionsgemeinschaften.",
      "bilden Staat und Religionsgemeinschaften eine Einheit.",
    ],
    correctAnswer: 0,
  },
  {
    id: 34,
    question: "Was ist Deutschland nicht?",
    answers: [
      "eine Demokratie",
      "ein Rechtsstaat",
      "eine Monarchie",
      "ein Sozialstaat",
    ],
    correctAnswer: 2,
  },
  {
    id: 35,
    question: "Womit finanziert der deutsche Staat die Sozialversicherung?",
    answers: [
      "Kirchensteuern",
      "Sozialabgaben",
      "Spendengeldern",
      "Vereinsbeiträgen",
    ],
    correctAnswer: 1,
  },
  {
    id: 36,
    question: "Welche Maßnahme schafft in Deutschland soziale Sicherheit?",
    answers: [
      "die Krankenversicherung",
      "die Autoversicherung",
      "die Gebäudeversicherung",
      "die Haftpflichtversicherung",
    ],
    correctAnswer: 0,
  },
  {
    id: 37,
    question:
      "Wie werden die Regierungschefs / Regierungschefinnen der meisten Bundesländer in Deutschland genannt?",
    answers: [
      "Erster Minister / Erste Ministerin",
      "Premierminister / Premierministerin",
      "Senator / Senatorin",
      "Ministerpräsident / Ministerpräsidentin",
    ],
    correctAnswer: 3,
  },
  {
    id: 38,
    question:
      "Die Bundesrepublik Deutschland ist ein demokratischer und sozialer …",
    answers: [
      "Staatenverbund.",
      "Bundesstaat.",
      "Staatenbund.",
      "Zentralstaat.",
    ],
    correctAnswer: 1,
  },
  {
    id: 39,
    question: "Was hat jedes deutsche Bundesland?",
    answers: [
      "einen eigenen Außenminister / eine eigene Außenministerin",
      "eine eigene Währung",
      "eine eigene Armee",
      "eine eigene Regierung",
    ],
    correctAnswer: 3,
  },
  {
    id: 40,
    question: "Mit welchen Worten beginnt die deutsche Nationalhymne?",
    answers: [
      "Völker, hört die Signale …",
      "Einigkeit und Recht und Freiheit …",
      "Freude schöner Götterfunken …",
      "Deutschland einig Vaterland …",
    ],
    correctAnswer: 1,
  },
  {
    id: 41,
    question: "Warum gibt es in einer Demokratie mehr als eine Partei?",
    answers: [
      "weil dadurch die unterschiedlichen Meinungen der Bürger und Bürgerinnen vertreten werden",
      "damit Bestechung in der Politik begrenzt wird",
      "um politische Demonstrationen zu verhindern",
      "um wirtschaftlichen Wettbewerb anzuregen",
    ],
    correctAnswer: 0,
  },
  {
    id: 42,
    question: "Wer beschließt in Deutschland ein neues Gesetz?",
    answers: ["die Regierung", "das Parlament", "die Gerichte", "die Polizei"],
    correctAnswer: 1,
  },
  {
    id: 43,
    question: "Wann kann in Deutschland eine Partei verboten werden?",
    answers: [
      "wenn ihr Wahlkampf zu teuer ist",
      "wenn sie gegen die Verfassung kämpft",
      "wenn sie Kritik am Staatsoberhaupt äußert",
      "wenn ihr Programm eine neue Richtung vorschlägt",
    ],
    correctAnswer: 1,
  },
  {
    id: 44,
    question:
      "Wen kann man als Bürger / Bürgerin in Deutschland nicht direkt wählen?",
    answers: [
      "Abgeordnete des EU-Parlaments",
      "den Bundespräsidenten / die Bundespräsidentin",
      "Landtagsabgeordnete",
      "Bundestagsabgeordnete",
    ],
    correctAnswer: 1,
  },
  {
    id: 45,
    question: "Zu welcher Versicherung gehört die Pflegeversicherung?",
    answers: [
      "Sozialversicherung",
      "Unfallversicherung",
      "Hausratversicherung",
      "Haftpflicht- und Feuerversicherung",
    ],
    correctAnswer: 0,
  },
  {
    id: 46,
    question:
      "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört dazu?",
    answers: [
      "Er baut Straßen und Schulen.",
      "Er verkauft Lebensmittel und Kleidung.",
      "Er versorgt alle Einwohner und Einwohnerinnen kostenlos mit Zeitungen.",
      "Er produziert Autos und Busse.",
    ],
    correctAnswer: 0,
  },
  {
    id: 47,
    question:
      "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört nicht dazu?",
    answers: [
      "Er bezahlt für alle Staatsangehörigen Urlaubsreisen.",
      "Er zahlt Kindergeld.",
      "Er unterstützt Museen.",
      "Er fördert Sportler und Sportlerinnen.",
    ],
    correctAnswer: 0,
  },
  {
    id: 48,
    question:
      "Welches Organ gehört nicht zu den Verfassungsorganen Deutschlands?",
    answers: [
      "der Bundesrat",
      "der Bundespräsident / die Bundespräsidentin",
      "die Bürgerversammlung",
      "die Regierung",
    ],
    correctAnswer: 2,
  },
  {
    id: 49,
    question: "Wer bestimmt in Deutschland die Schulpolitik?",
    answers: [
      "die Lehrer und Lehrerinnen",
      "die Bundesländer",
      "das Familienministerium",
      "die Universitäten",
    ],
    correctAnswer: 1,
  },
  {
    id: 50,
    question: "Die Wirtschaftsform in Deutschland nennt man …",
    answers: [
      "freie Zentralwirtschaft.",
      "soziale Marktwirtschaft.",
      "gelenkte Zentralwirtschaft.",
      "Planwirtschaft.",
    ],
    correctAnswer: 1,
  },
  {
    id: 51,
    question: "Zu einem demokratischen Rechtsstaat gehört es nicht, dass …",
    answers: [
      "Menschen sich kritisch über die Regierung äußern können.",
      "Bürger friedlich demonstrieren gehen dürfen.",
      "Menschen von einer Privatpolizei ohne Grund verhaftet werden.",
      "jemand ein Verbrechen begeht und deshalb verhaftet wird.",
    ],
    correctAnswer: 2,
  },
  {
    id: 52,
    question: 'Was bedeutet "Volkssouveränität"? Alle Staatsgewalt geht vom …',
    answers: [
      "Volke aus.",
      "Bundestag aus.",
      "preußischen König aus.",
      "Bundesverfassungsgericht aus.",
    ],
    correctAnswer: 0,
  },
  {
    id: 53,
    question: 'Was bedeutet "Rechtsstaat" in Deutschland?',
    answers: [
      "Der Staat hat Recht.",
      "Es gibt nur rechte Parteien.",
      "Die Bürger und Bürgerinnen entscheiden über Gesetze.",
      "Der Staat muss die Gesetze einhalten.",
    ],
    correctAnswer: 3,
  },
  {
    id: 54,
    question: "Was ist keine staatliche Gewalt in Deutschland?",
    answers: ["Legislative", "Judikative", "Exekutive", "Direktive"],
    correctAnswer: 3,
  },
  {
    id: 55,
    question: "Was zeigt dieses Bild?",
    answers: [
      "den Bundestagssitz in Berlin",
      "das Bundesverfassungsgericht in Karlsruhe",
      "das Bundesratsgebäude in Berlin",
      "das Bundeskanzleramt in Berlin",
    ],
    correctAnswer: 0,
    imageUrl: "images/055.png",
  },
  {
    id: 56,
    question: "Welches Amt gehört in Deutschland zur Gemeindeverwaltung?",
    answers: ["Pfarramt", "Ordnungsamt", "Finanzamt", "Auswärtiges Amt"],
    correctAnswer: 1,
  },
  {
    id: 57,
    question:
      "Wer wird meistens zum Präsidenten / zur Präsidentin des Deutschen Bundestages gewählt?",
    answers: [
      "der / die älteste Abgeordnete im Parlament",
      "der Ministerpräsident / die Ministerpräsidentin des größten Bundeslandes",
      "ein Abgeordneter / eine Abgeordnete der stärksten Fraktion",
      "ein ehemaliger Bundeskanzler / eine ehemalige Bundeskanzlerin",
    ],
    correctAnswer: 2,
  },
  {
    id: 58,
    question:
      "Wer ernennt in Deutschland die Minister / die Ministerinnen der Bundesregierung?",
    answers: [
      "der Präsident / die Präsidentin des Bundesverfassungsgerichtes",
      "der Bundespräsident / die Bundespräsidentin",
      "der Bundesratspräsident / die Bundesratspräsidentin",
      "der Bundestagspräsident / die Bundestagspräsidentin",
    ],
    correctAnswer: 1,
  },
  {
    id: 59,
    question:
      'Welche Parteien wurden in Deutschland 2007 zur Partei "Die Linke"?',
    answers: [
      "CDU und SSW",
      "PDS und WASG",
      "CSU und FDP",
      "Bündnis 90/Die Grünen und SPD",
    ],
    correctAnswer: 1,
  },
  {
    id: 60,
    question: "In Deutschland gehören der Bundestag und der Bundesrat zur …",
    answers: ["Exekutive.", "Legislative.", "Direktive.", "Judikative."],
    correctAnswer: 1,
  },
  {
    id: 61,
    question: 'Was bedeutet "Volkssouveränität"?',
    answers: [
      "Der König / die Königin herrscht über das Volk.",
      "Das Bundesverfassungsgericht steht über der Verfassung.",
      "Die Interessenverbände üben die Souveränität zusammen mit der Regierung aus.",
      "Die Staatsgewalt geht vom Volke aus.",
    ],
    correctAnswer: 3,
  },
  {
    id: 62,
    question:
      "Wenn das Parlament eines deutschen Bundeslandes gewählt wird, nennt man das …",
    answers: [
      "Kommunalwahl.",
      "Landtagswahl.",
      "Europawahl.",
      "Bundestagswahl.",
    ],
    correctAnswer: 1,
  },
  {
    id: 63,
    question: "Was gehört in Deutschland nicht zur Exekutive?",
    answers: [
      "die Polizei",
      "die Gerichte",
      "das Finanzamt",
      "die Ministerien",
    ],
    correctAnswer: 1,
  },
  {
    id: 64,
    question: "Die Bundesrepublik Deutschland ist heute gegliedert in …",
    answers: [
      "vier Besatzungszonen.",
      "einen Oststaat und einen Weststaat.",
      "16 Kantone.",
      "Bund, Länder und Kommunen.",
    ],
    correctAnswer: 3,
  },
  {
    id: 65,
    question: "Es gehört nicht zu den Aufgaben des Deutschen Bundestages, …",
    answers: [
      "Gesetze zu entwerfen.",
      "die Bundesregierung zu kontrollieren.",
      "den Bundeskanzler / die Bundeskanzlerin zu wählen.",
      "das Bundeskabinett zu bilden.",
    ],
    correctAnswer: 3,
  },
  {
    id: 66,
    question: "Wer schrieb den Text zur deutschen Nationalhymne?",
    answers: [
      "Friedrich von Schiller",
      "Clemens Brentano",
      "Johann Wolfgang von Goethe",
      "Heinrich Hoffmann von Fallersleben",
    ],
    correctAnswer: 3,
  },
  {
    id: 67,
    question: "Was ist in Deutschland vor allem eine Aufgabe der Bundesländer?",
    answers: [
      "Verteidigungspolitik",
      "Außenpolitik",
      "Wirtschaftspolitik",
      "Schulpolitik",
    ],
    correctAnswer: 3,
  },
  {
    id: 68,
    question: "Warum kontrolliert der Staat in Deutschland das Schulwesen?",
    answers: [
      "weil es in Deutschland nur staatliche Schulen gibt",
      "weil alle Schüler und Schülerinnen einen Schulabschluss haben müssen",
      "weil es in den Bundesländern verschiedene Schulen gibt",
      "weil es nach dem Grundgesetz seine Aufgabe ist",
    ],
    correctAnswer: 3,
  },
  {
    id: 69,
    question:
      "Die Bundesrepublik Deutschland hat einen dreistufigen Verwaltungsaufbau. Wie heißt die unterste politische Stufe?",
    answers: [
      "Stadträte",
      "Landräte",
      "Gemeinden und Kommunen",
      "Bezirksämter",
    ],
    correctAnswer: 2,
  },
  {
    id: 70,
    question:
      "Der deutsche Bundespräsident Gustav Heinemann gibt Helmut Schmidt 1974 die Ernennungsurkunde zum deutschen Bundeskanzler. Was gehört zu den Aufgaben des deutschen Bundespräsidenten / der deutschen Bundespräsidentin?",
    answers: [
      "Er / Sie führt die Regierungsgeschäfte.",
      "Er / Sie kontrolliert die Regierungspartei.",
      "Er / Sie wählt die Minister / Ministerinnen aus.",
      "Er / Sie schlägt den Kanzler / die Kanzlerin zur Wahl vor.",
    ],
    correctAnswer: 3,
    imageUrl: "images/070.png",
  },
  {
    id: 71,
    question:
      "Wo hält sich der deutsche Bundeskanzler / die deutsche Bundeskanzlerin am häufigsten auf? Am häufigsten ist er / sie …",
    answers: [
      "in Bonn, weil sich dort das Bundeskanzleramt und der Bundestag befinden.",
      "in Berlin, weil sich dort das Bundeskanzleramt und der Bundestag befinden.",
      "auf Schloss Meseberg, dem Gästehaus der Bundesregierung, um Staatsgäste zu empfangen.",
      "auf Schloss Bellevue, dem Amtssitz des Bundespräsidenten / der Bundespräsidentin, um Staatsgäste zu empfangen.",
    ],
    correctAnswer: 1,
  },
  {
    id: 72,
    question:
      "Wie heißt der jetzige Bundeskanzler / die jetzige Bundeskanzlerin von Deutschland?",
    answers: [
      "Gerhard Schröder",
      "Jürgen Rüttgers",
      "Klaus Wowereit",
      "Angela Merkel",
    ],
    correctAnswer: 3,
  },
  {
    id: 73,
    question:
      "Die beiden größten Fraktionen im Deutschen Bundestag heißen zurzeit …",
    answers: [
      "CDU/CSU und SPD.",
      "Die Linke und Bündnis 90/Die Grünen.",
      "FDP und SPD.",
      "Die Linke und FDP.",
    ],
    correctAnswer: 0,
  },
  {
    id: 74,
    question: "Wie heißt das Parlament für ganz Deutschland?",
    answers: [
      "Bundesversammlung",
      "Volkskammer",
      "Bundestag",
      "Bundesgerichtshof",
    ],
    correctAnswer: 2,
  },
  {
    id: 75,
    question: "Wie heißt Deutschlands heutiges Staatsoberhaupt?",
    answers: [
      "Frank-Walter Steinmeier",
      "Norbert Lammert",
      "Wolfgang Thierse",
      "Edmund Stoiber",
    ],
    correctAnswer: 0,
  },
  {
    id: 76,
    question: "Was bedeutet die Abkürzung CDU in Deutschland?",
    answers: [
      "Christliche Deutsche Union",
      "Club Deutscher Unternehmer",
      "Christlicher Deutscher Umweltschutz",
      "Christlich Demokratische Union",
    ],
    correctAnswer: 3,
  },
  {
    id: 77,
    question: "Was ist die Bundeswehr?",
    answers: [
      "die deutsche Polizei",
      "ein deutscher Hafen",
      "eine deutsche Bürgerinitiative",
      "die deutsche Armee",
    ],
    correctAnswer: 3,
  },
  {
    id: 78,
    question: "Was bedeutet die Abkürzung SPD?",
    answers: [
      "Sozialistische Partei Deutschlands",
      "Sozialpolitische Partei Deutschlands",
      "Sozialdemokratische Partei Deutschlands",
      "Sozialgerechte Partei Deutschlands",
    ],
    correctAnswer: 2,
  },
  {
    id: 79,
    question: "Was bedeutet die Abkürzung FDP in Deutschland?",
    answers: [
      "Friedliche Demonstrative Partei",
      "Freie Deutschland Partei",
      "Führende Demokratische Partei",
      "Freie Demokratische Partei",
    ],
    correctAnswer: 3,
  },
  {
    id: 80,
    question:
      "Welches Gericht in Deutschland ist zuständig für die Auslegung des Grundgesetzes?",
    answers: [
      "Oberlandesgericht",
      "Amtsgericht",
      "Bundesverfassungsgericht",
      "Verwaltungsgericht",
    ],
    correctAnswer: 2,
  },
  {
    id: 81,
    question:
      "Wer wählt den Bundeskanzler / die Bundeskanzlerin in Deutschland?",
    answers: [
      "der Bundesrat",
      "die Bundesversammlung",
      "das Volk",
      "der Bundestag",
    ],
    correctAnswer: 3,
  },
  {
    id: 82,
    question: "Wer leitet das deutsche Bundeskabinett?",
    answers: [
      "der Bundestagspräsident / die Bundestagspräsidentin",
      "der Bundespräsident / die Bundespräsidentin",
      "der Bundeskanzler / die Bundeskanzlerin",
      "der Bundesratspräsident / die Bundesratspräsidentin",
    ],
    correctAnswer: 2,
  },
  {
    id: 83,
    question:
      "Wer wählt den deutschen Bundeskanzler / die deutsche Bundeskanzlerin?",
    answers: [
      "das Volk",
      "die Bundesversammlung",
      "der Bundestag",
      "die Bundesregierung",
    ],
    correctAnswer: 2,
  },
  {
    id: 84,
    question:
      "Welche Hauptaufgabe hat der deutsche Bundespräsident / die deutsche Bundespräsidentin? Er / Sie …",
    answers: [
      "regiert das Land.",
      "entwirft die Gesetze.",
      "repräsentiert das Land.",
      "überwacht die Einhaltung der Gesetze.",
    ],
    correctAnswer: 2,
  },
  {
    id: 85,
    question: "Wer bildet den deutschen Bundesrat?",
    answers: [
      "die Abgeordneten des Bundestages",
      "die Minister und Ministerinnen der Bundesregierung",
      "die Regierungsvertreter der Bundesländer",
      "die Parteimitglieder",
    ],
    correctAnswer: 2,
  },
  {
    id: 86,
    question:
      "Wer wählt in Deutschland den Bundespräsidenten / die Bundespräsidentin?",
    answers: [
      "die Bundesversammlung",
      "der Bundesrat",
      "das Bundesparlament",
      "das Bundesverfassungsgericht",
    ],
    correctAnswer: 0,
  },
  {
    id: 87,
    question: "Wer ist das Staatsoberhaupt der Bundesrepublik Deutschland?",
    answers: [
      "der Bundeskanzler / die Bundeskanzlerin",
      "der Bundespräsident / die Bundespräsidentin",
      "der Bundesratspräsident / die Bundesratspräsidentin",
      "der Bundestagspräsident / die Bundestagspräsidentin",
    ],
    correctAnswer: 1,
  },
  {
    id: 88,
    question: "Die parlamentarische Opposition im Deutschen Bundestag …",
    answers: [
      "kontrolliert die Regierung.",
      "entscheidet, wer Bundesminister / Bundesministerin wird.",
      "bestimmt, wer im Bundesrat sitzt.",
      "schlägt die Regierungschefs / Regierungschefinnen der Länder vor.",
    ],
    correctAnswer: 0,
  },
  {
    id: 89,
    question:
      "Wie nennt man in Deutschland die Vereinigung von Abgeordneten einer Partei im Parlament?",
    answers: ["Verband", "Ältestenrat", "Fraktion", "Opposition"],
    correctAnswer: 2,
  },
  {
    id: 90,
    question:
      "Die deutschen Bundesländer wirken an der Gesetzgebung des Bundes mit durch …",
    answers: [
      "den Bundesrat.",
      "die Bundesversammlung.",
      "den Bundestag.",
      "die Bundesregierung.",
    ],
    correctAnswer: 0,
  },
  {
    id: 91,
    question:
      "In Deutschland kann ein Regierungswechsel in einem Bundesland Auswirkungen auf die Bundespolitik haben. Das Regieren wird …",
    answers: [
      "schwieriger, wenn sich dadurch die Mehrheit im Bundestag ändert.",
      "leichter, wenn dadurch neue Parteien in den Bundesrat kommen.",
      "schwieriger, wenn dadurch die Mehrheit im Bundesrat verändert wird.",
      "leichter, wenn es sich um ein reiches Bundesland handelt.",
    ],
    correctAnswer: 2,
  },
  {
    id: 92,
    question: "Was bedeutet die Abkürzung CSU in Deutschland?",
    answers: [
      "Christlich Sichere Union",
      "Christlich Süddeutsche Union",
      "Christlich Sozialer Unternehmerverband",
      "Christlich Soziale Union",
    ],
    correctAnswer: 3,
  },
  {
    id: 93,
    question:
      'Je mehr "Zweitstimmen" eine Partei bei einer Bundestagswahl bekommt, desto …',
    answers: [
      "mehr Sitze erhält die Partei im Parlament.",
      "weniger Erststimmen kann sie haben.",
      "mehr Direktkandidaten der Partei ziehen ins Parlament ein.",
      "größer ist das Risiko, eine Koalition bilden zu müssen.",
    ],
    correctAnswer: 0,
  },
  {
    id: 94,
    question:
      "Ab welchem Alter darf man in Deutschland an der Wahl zum Deutschen Bundestag teilnehmen?",
    answers: ["16", "18", "21", "23"],
    correctAnswer: 1,
  },
  {
    id: 95,
    question: "Was gilt für die meisten Kinder in Deutschland?",
    answers: [
      "Wahlpflicht",
      "Schulpflicht",
      "Schweigepflicht",
      "Religionspflicht",
    ],
    correctAnswer: 1,
  },
  {
    id: 96,
    question:
      "Was muss jeder deutsche Staatsbürger / jede deutsche Staatsbürgerin ab dem 16. Lebensjahr besitzen?",
    answers: [
      "einen Reisepass",
      "einen Personalausweis",
      "einen Sozialversicherungsausweis",
      "einen Führerschein",
    ],
    correctAnswer: 1,
  },
  {
    id: 97,
    question:
      "Was bezahlt man in Deutschland automatisch, wenn man fest angestellt ist?",
    answers: ["Sozialversicherung", "Sozialhilfe", "Kindergeld", "Wohngeld"],
    correctAnswer: 0,
  },
  {
    id: 98,
    question:
      "Wenn Abgeordnete im Deutschen Bundestag ihre Fraktion wechseln, ...",
    answers: [
      "kann die Regierung ihre Mehrheit verlieren.",
      "dürfen sie nicht mehr an den Sitzungen des Parlaments teilnehmen.",
      "muss der Bundespräsident / die Bundespräsidentin zuvor sein / ihr Einverständnis geben.",
      "dürfen die Wähler / Wählerinnen dieser Abgeordneten noch einmal wählen.",
    ],
    correctAnswer: 0,
  },
  {
    id: 99,
    question: "Wer bezahlt in Deutschland die Sozialversicherungen?",
    answers: [
      "Arbeitgeber / Arbeitgeberinnen und Arbeitnehmer / Arbeitnehmerinnen",
      "nur Arbeitnehmer / Arbeitnehmerinnen",
      "alle Staatsangehörigen",
      "nur Arbeitgeber / Arbeitgeberinnen",
    ],
    correctAnswer: 0,
  },
  {
    id: 100,
    question: "Was gehört nicht zur gesetzlichen Sozialversicherung?",
    answers: [
      "die gesetzliche Rentenversicherung",
      "die Lebensversicherung",
      "die Arbeitslosenversicherung",
      "die Pflegeversicherung",
    ],
    correctAnswer: 1,
  },
  {
    id: 101,
    question: "Gewerkschaften sind Interessenverbände der …",
    answers: [
      "Jugendlichen.",
      "Arbeitnehmer und Arbeitnehmerinnen.",
      "Rentner und Rentnerinnen.",
      "Arbeitgeber und Arbeitgeberinnen.",
    ],
    correctAnswer: 1,
  },
  {
    id: 102,
    question:
      "Womit kann man in der Bundesrepublik Deutschland geehrt werden, wenn man auf politischem, wirtschaftlichem, kulturellem, geistigem oder sozialem Gebiet eine besondere Leistung erbracht hat? Mit dem …",
    answers: [
      "Bundesadler",
      "Bundesverdienstkreuz",
      "Vaterländischen Verdienstorden",
      'Ehrentitel "Held der Deutschen Demokratischen Republik"',
    ],
    correctAnswer: 1,
  },
  {
    id: 103,
    question:
      'Was wird in Deutschland als "Ampelkoalition" bezeichnet? Die Zusammenarbeit …',
    answers: [
      "der Bundestagsfraktionen von CDU und CSU",
      "von SPD, FDP und Bündnis 90/Die Grünen in einer Regierung",
      "von CSU, Die LINKE und Bündnis 90/Die Grünen in einer Regierung",
      "der Bundestagsfraktionen von CDU und SPD",
    ],
    correctAnswer: 1,
  },
  {
    id: 104,
    question:
      "Eine Frau in Deutschland verliert ihre Arbeit. Was darf nicht der Grund für diese Entlassung sein?",
    answers: [
      "Die Frau ist lange krank und arbeitsunfähig.",
      "Die Frau kam oft zu spät zur Arbeit.",
      "Die Frau erledigt private Sachen während der Arbeitszeit.",
      "Die Frau bekommt ein Kind und ihr Chef weiß das.",
    ],
    correctAnswer: 3,
  },
  {
    id: 105,
    question:
      "Was ist eine Aufgabe von Wahlhelfern / Wahlhelferinnen in Deutschland?",
    answers: [
      "Sie helfen alten Menschen bei der Stimmabgabe in der Wahlkabine.",
      "Sie schreiben die Wahlbenachrichtigungen vor der Wahl.",
      "Sie geben Zwischenergebnisse an die Medien weiter.",
      "Sie zählen die Stimmen nach dem Ende der Wahl.",
    ],
    correctAnswer: 3,
  },
  {
    id: 106,
    question:
      "In Deutschland helfen ehrenamtliche Wahlhelfer und Wahlhelferinnen bei den Wahlen. Was ist eine Aufgabe von Wahlhelfern / Wahlhelferinnen?",
    answers: [
      "Sie helfen Kindern und alten Menschen beim Wählen.",
      "Sie schreiben Karten und Briefe mit der Angabe des Wahllokals.",
      "Sie geben Zwischenergebnisse an Journalisten weiter.",
      "Sie zählen die Stimmen nach dem Ende der Wahl.",
    ],
    correctAnswer: 3,
  },
  {
    id: 107,
    question: "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?",
    answers: ["2 Jahre", "4 Jahre", "6 Jahre", "8 Jahre"],
    correctAnswer: 1,
  },
  {
    id: 108,
    question:
      "Bei einer Bundestagswahl in Deutschland darf jeder wählen, der …",
    answers: [
      "in der Bundesrepublik Deutschland wohnt und wählen möchte.",
      "Bürger / Bürgerin der Bundesrepublik Deutschland ist und mindestens 18 Jahre alt ist.",
      "seit mindestens 3 Jahren in der Bundesrepublik Deutschland lebt.",
      "Bürger / Bürgerin der Bundesrepublik Deutschland ist und mindestens 21 Jahre alt ist.",
    ],
    correctAnswer: 1,
  },
  {
    id: 109,
    question: "Wie oft gibt es normalerweise Bundestagswahlen in Deutschland?",
    answers: [
      "alle drei Jahre",
      "alle vier Jahre",
      "alle fünf Jahre",
      "alle sechs Jahre",
    ],
    correctAnswer: 1,
  },
  {
    id: 110,
    question: "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?",
    answers: ["2 Jahre", "3 Jahre", "4 Jahre", "5 Jahre"],
    correctAnswer: 2,
  },
  {
    id: 111,
    question: "In Deutschland darf man wählen. Was bedeutet das?",
    answers: [
      "Alle deutschen Staatsangehörigen dürfen wählen, wenn sie das Mindestalter erreicht haben.",
      "Nur verheiratete Personen dürfen wählen.",
      "Nur Personen mit einem festen Arbeitsplatz dürfen wählen.",
      "Alle Einwohner und Einwohnerinnen in Deutschland müssen wählen.",
    ],
    correctAnswer: 0,
  },
  {
    id: 112,
    question: "Die Wahlen in Deutschland sind …",
    answers: ["speziell.", "geheim.", "berufsbezogen.", "geschlechtsabhängig."],
    correctAnswer: 1,
  },
  {
    id: 113,
    question: "Wahlen in Deutschland gewinnt die Partei, die …",
    answers: [
      "die meisten Stimmen bekommt.",
      "die meisten Männer mehrheitlich gewählt haben.",
      "die meisten Stimmen bei den Arbeitern / Arbeiterinnen bekommen hat.",
      "die meisten Erststimmen für ihren Kanzlerkandidaten / ihre Kanzlerkandidatin erhalten hat.",
    ],
    correctAnswer: 0,
  },
  {
    id: 114,
    question: "An demokratischen Wahlen in Deutschland teilzunehmen ist …",
    answers: ["eine Pflicht.", "ein Recht.", "ein Zwang.", "eine Last."],
    correctAnswer: 1,
  },
  {
    id: 115,
    question: 'Was bedeutet "aktives Wahlrecht" in Deutschland?',
    answers: [
      "Man kann gewählt werden.",
      "Man muss wählen gehen.",
      "Man kann wählen.",
      "Man muss zur Auszählung der Stimmen gehen.",
    ],
    correctAnswer: 2,
  },
  {
    id: 116,
    question:
      "Wenn Sie bei einer Bundestagswahl in Deutschland wählen dürfen, heißt das …",
    answers: [
      "aktive Wahlkampagne.",
      "aktives Wahlverfahren.",
      "aktiver Wahlkampf.",
      "aktives Wahlrecht.",
    ],
    correctAnswer: 3,
  },
  {
    id: 117,
    question:
      "Wie viel Prozent der Zweitstimmen müssen Parteien mindestens bekommen, um in den Deutschen Bundestag gewählt zu werden?",
    answers: ["3 %", "4 %", "5 %", "6 %"],
    correctAnswer: 2,
  },
  {
    id: 118,
    question: "Was regelt das Wahlrecht in Deutschland?",
    answers: [
      "Wer wählen darf, muss wählen.",
      "Alle die wollen, können wählen.",
      "Wer nicht wählt, verliert das Recht zu wählen.",
      "Wer wählen darf, kann wählen.",
    ],
    correctAnswer: 3,
  },
  {
    id: 119,
    question: "Wahlen in Deutschland sind frei. Was bedeutet das?",
    answers: [
      "Alle verurteilten Straftäter / Straftäterinnen dürfen nicht wählen.",
      "Wenn ich wählen gehen möchte, muss mein Arbeitgeber / meine Arbeitgeberin mir frei geben.",
      "Jede Person kann ohne Zwang entscheiden, ob sie wählen möchte und wen sie wählen möchte.",
      "Ich kann frei entscheiden, wo ich wählen gehen möchte.",
    ],
    correctAnswer: 2,
  },
  {
    id: 120,
    question: "Das Wahlsystem in Deutschland ist ein …",
    answers: [
      "Zensuswahlrecht.",
      "Dreiklassenwahlrecht.",
      "Mehrheits- und Verhältniswahlrecht.",
      "allgemeines Männerwahlrecht.",
    ],
    correctAnswer: 2,
  },
  {
    id: 121,
    question:
      "Eine Partei möchte in den Deutschen Bundestag. Sie muss aber einen Mindestanteil an Wählerstimmen haben. Das heißt …",
    answers: ["5 %-Hürde.", "Zulassungsgrenze.", "Basiswert.", "Richtlinie."],
    correctAnswer: 0,
  },
  {
    id: 122,
    question:
      "Welchem Grundsatz unterliegen Wahlen in Deutschland? Wahlen in Deutschland sind …",
    answers: [
      "frei, gleich, geheim.",
      "offen, sicher, frei.",
      "geschlossen, gleich, sicher.",
      "sicher, offen, freiwillig.",
    ],
    correctAnswer: 0,
  },
  {
    id: 123,
    question: 'Was ist in Deutschland die "5 %-Hürde"?',
    answers: [
      "Abstimmungsregelung im Bundestag für kleine Parteien",
      "Anwesenheitskontrolle im Bundestag für Abstimmungen",
      "Mindestanteil an Wählerstimmen, um ins Parlament zu kommen",
      "Anwesenheitskontrolle im Bundesrat für Abstimmungen",
    ],
    correctAnswer: 2,
  },
  {
    id: 124,
    question: "Die Bundestagswahl in Deutschland ist die Wahl …",
    answers: [
      "des Bundeskanzlers / der Bundeskanzlerin.",
      "der Parlamente der Länder.",
      "des Parlaments für Deutschland.",
      "des Bundespräsidenten / der Bundespräsidentin.",
    ],
    correctAnswer: 2,
  },
  {
    id: 125,
    question:
      "In einer Demokratie ist eine Funktion von regelmäßigen Wahlen, …",
    answers: [
      "die Bürger und Bürgerinnen zu zwingen, ihre Stimme abzugeben.",
      "nach dem Willen der Wählermehrheit den Wechsel der Regierung zu ermöglichen.",
      "im Land bestehende Gesetze beizubehalten.",
      "den Armen mehr Macht zu geben.",
    ],
    correctAnswer: 1,
  },
  {
    id: 126,
    question:
      "Was bekommen wahlberechtigte Bürger und Bürgerinnen in Deutschland vor einer Wahl?",
    answers: [
      "eine Wahlbenachrichtigung von der Gemeinde",
      "eine Wahlerlaubnis vom Bundespräsidenten / von der Bundespräsidentin",
      "eine Benachrichtigung von der Bundesversammlung",
      "eine Benachrichtigung vom Pfarramt",
    ],
    correctAnswer: 0,
  },
  {
    id: 127,
    question:
      "Warum gibt es die 5 %-Hürde im Wahlgesetz der Bundesrepublik Deutschland? Es gibt sie, weil …",
    answers: [
      "die Programme von vielen kleinen Parteien viele Gemeinsamkeiten haben.",
      "die Bürger und Bürgerinnen bei vielen kleinen Parteien die Orientierung verlieren können.",
      "viele kleine Parteien die Regierungsbildung erschweren.",
      "die kleinen Parteien nicht so viel Geld haben, um die Politiker und Politikerinnen zu bezahlen.",
    ],
    correctAnswer: 2,
  },
  {
    id: 128,
    question:
      "Parlamentsmitglieder, die von den Bürgern und Bürgerinnen gewählt werden, nennt man …",
    answers: [
      "Abgeordnete.",
      "Kanzler / Kanzlerinnen.",
      "Botschafter / Botschafterinnen.",
      "Ministerpräsidenten / Ministerpräsidentinnen.",
    ],
    correctAnswer: 0,
  },
  {
    id: 129,
    question: "Vom Volk gewählt wird in Deutschland …",
    answers: [
      "der Bundeskanzler / die Bundeskanzlerin.",
      "der Ministerpräsident / die Ministerpräsidentin eines Bundeslandes.",
      "der Bundestag.",
      "der Bundespräsident / die Bundespräsidentin.",
    ],
    correctAnswer: 2,
  },
  {
    id: 130,
    question: "Welcher Stimmzettel wäre bei einer Bundestagswahl gültig?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: 0,
    imageUrl: "images/130.png",
  },
  {
    id: 131,
    question: "In Deutschland ist ein Bürgermeister / eine Bürgermeisterin …",
    answers: [
      "der Leiter / die Leiterin einer Schule.",
      "der Chef / die Chefin einer Bank.",
      "das Oberhaupt einer Gemeinde.",
      "der / die Vorsitzende einer Partei.",
    ],
    correctAnswer: 2,
  },
  {
    id: 132,
    question:
      "Viele Menschen in Deutschland arbeiten in ihrer Freizeit ehrenamtlich. Was bedeutet das?",
    answers: [
      "Sie arbeiten als Soldaten / Soldatinnen.",
      "Sie arbeiten freiwillig und unbezahlt in Vereinen und Verbänden.",
      "Sie arbeiten in der Bundesregierung.",
      "Sie arbeiten in einem Krankenhaus und verdienen dabei Geld.",
    ],
    correctAnswer: 1,
  },
  {
    id: 133,
    question:
      "Was ist bei Bundestags- und Landtagswahlen in Deutschland erlaubt?",
    answers: [
      "Der Ehemann wählt für seine Frau mit.",
      "Man kann durch Briefwahl seine Stimme abgeben.",
      "Man kann am Wahltag telefonisch seine Stimme abgeben.",
      "Kinder ab dem Alter von 14 Jahren dürfen wählen.",
    ],
    correctAnswer: 1,
  },
  {
    id: 134,
    question:
      "Man will die Buslinie abschaffen, mit der Sie immer zur Arbeit fahren. Was können Sie machen, um die Buslinie zu erhalten?",
    answers: [
      "Ich beteilige mich an einer Bürgerinitiative für die Erhaltung der Buslinie oder gründe selber eine Initiative.",
      "Ich werde Mitglied in einem Sportverein und trainiere Radfahren.",
      "Ich wende mich an das Finanzamt, weil ich als Steuerzahler / Steuerzahlerin ein Recht auf die Buslinie habe.",
      "Ich schreibe einen Brief an das Forstamt der Gemeinde.",
    ],
    correctAnswer: 0,
  },
  {
    id: 135,
    question: "Wen vertreten die Gewerkschaften in Deutschland?",
    answers: [
      "große Unternehmen",
      "kleine Unternehmen",
      "Selbständige",
      "Arbeitnehmer und Arbeitnehmerinnen",
    ],
    correctAnswer: 3,
  },
  {
    id: 136,
    question: "Sie gehen in Deutschland zum Arbeitsgericht bei …",
    answers: [
      "falscher Nebenkostenabrechnung.",
      "ungerechtfertigter Kündigung durch Ihren Chef / Ihre Chefin.",
      "Problemen mit den Nachbarn / Nachbarinnen.",
      "Schwierigkeiten nach einem Verkehrsunfall.",
    ],
    correctAnswer: 1,
  },
  {
    id: 137,
    question:
      "Welches Gericht ist in Deutschland bei Konflikten in der Arbeitswelt zuständig?",
    answers: [
      "das Familiengericht",
      "das Strafgericht",
      "das Arbeitsgericht",
      "das Amtsgericht",
    ],
    correctAnswer: 2,
  },
  {
    id: 138,
    question:
      "Was kann ich in Deutschland machen, wenn mir mein Arbeitgeber / meine Arbeitgeberin zu Unrecht gekündigt hat?",
    answers: [
      "weiter arbeiten und freundlich zum Chef / zur Chefin sein",
      "ein Mahnverfahren gegen den Arbeitgeber / die Arbeitgeberin führen",
      "Kündigungsschutzklage erheben",
      "den Arbeitgeber / die Arbeitgeberin bei der Polizei anzeigen",
    ],
    correctAnswer: 2,
  },
  {
    id: 139,
    question:
      "Wann kommt es in Deutschland zu einem Prozess vor Gericht? Wenn jemand …",
    answers: [
      "zu einer anderen Religion übertritt.",
      "eine Straftat begangen hat und angeklagt wird.",
      "eine andere Meinung als die der Regierung vertritt.",
      "sein Auto falsch geparkt hat und es abgeschleppt wird.",
    ],
    correctAnswer: 1,
  },
  {
    id: 140,
    question:
      "Was macht ein Schöffe / eine Schöffin in Deutschland? Er / Sie …",
    answers: [
      "entscheidet mit Richtern / Richterinnen über Schuld und Strafe.",
      "gibt Bürgern / Bürgerinnen rechtlichen Rat.",
      "stellt Urkunden aus.",
      "verteidigt den Angeklagten / die Angeklagte.",
    ],
    correctAnswer: 0,
  },
  {
    id: 141,
    question:
      "Wer berät in Deutschland Personen bei Rechtsfragen und vertritt sie vor Gericht?",
    answers: [
      "ein Rechtsanwalt / eine Rechtsanwältin",
      "ein Richter / eine Richterin",
      "ein Schöffe / eine Schöffin",
      "ein Staatsanwalt / eine Staatsanwältin",
    ],
    correctAnswer: 0,
  },
  {
    id: 142,
    question:
      "Was ist die Hauptaufgabe eines Richters / einer Richterin in Deutschland? Ein Richter / eine Richterin …",
    answers: [
      "vertritt Bürger und Bürgerinnen vor einem Gericht.",
      "arbeitet an einem Gericht und spricht Urteile.",
      "ändert Gesetze.",
      "betreut Jugendliche vor Gericht.",
    ],
    correctAnswer: 1,
  },
  {
    id: 143,
    question: "Ein Richter / eine Richterin in Deutschland gehört zur …",
    answers: ["Judikative.", "Exekutive.", "Operative.", "Legislative."],
    correctAnswer: 0,
  },
  {
    id: 144,
    question: "Ein Richter / eine Richterin gehört in Deutschland zur …",
    answers: [
      "vollziehenden Gewalt.",
      "rechtsprechenden Gewalt.",
      "planenden Gewalt.",
      "gesetzgebenden Gewalt.",
    ],
    correctAnswer: 1,
  },
  {
    id: 145,
    question:
      "In Deutschland wird die Staatsgewalt geteilt. Für welche Staatsgewalt arbeitet ein Richter / eine Richterin? Für die …",
    answers: ["Judikative.", "Exekutive.", "Presse.", "Legislative."],
    correctAnswer: 0,
  },
  {
    id: 146,
    question: "Wie nennt man in Deutschland ein Verfahren vor einem Gericht?",
    answers: ["Programm", "Prozedur", "Protokoll", "Prozess"],
    correctAnswer: 3,
  },
  {
    id: 147,
    question:
      "Was ist die Arbeit eines Richters / einer Richterin in Deutschland?",
    answers: [
      "Deutschland regieren",
      "Recht sprechen",
      "Pläne erstellen",
      "Gesetze erlassen",
    ],
    correctAnswer: 1,
  },
  {
    id: 148,
    question: "Was ist eine Aufgabe der Polizei in Deutschland?",
    answers: [
      "das Land zu verteidigen",
      "die Bürgerinnen und Bürger abzuhören",
      "die Gesetze zu beschließen",
      "die Einhaltung von Gesetzen zu überwachen",
    ],
    correctAnswer: 3,
  },
  {
    id: 149,
    question:
      "Wer kann Gerichtsschöffe / Gerichtsschöffin in Deutschland werden?",
    answers: [
      "alle in Deutschland geborenen Einwohner / Einwohnerinnen über 18 Jahre",
      "alle deutschen Staatsangehörigen älter als 24 und jünger als 70 Jahre",
      "alle Personen, die seit mindestens 5 Jahren in Deutschland leben",
      "nur Personen mit einem abgeschlossenen Jurastudium",
    ],
    correctAnswer: 1,
  },
  {
    id: 150,
    question:
      "Ein Gerichtsschöffe / eine Gerichtsschöffin in Deutschland ist …",
    answers: [
      "der Stellvertreter / die Stellvertreterin des Stadtoberhaupts.",
      "ein ehrenamtlicher Richter / eine ehrenamtliche Richterin.",
      "ein Mitglied eines Gemeinderats.",
      "eine Person, die Jura studiert hat.",
    ],
    correctAnswer: 1,
  },
  {
    id: 151,
    question: "Wer baute die Mauer in Berlin?",
    answers: [
      "Großbritannien",
      "die Bundesrepublik Deutschland",
      "die DDR",
      "die USA",
    ],
    correctAnswer: 2,
  },
  {
    id: 152,
    question:
      "Wann waren die Nationalsozialisten mit Adolf Hitler in Deutschland an der Macht?",
    answers: [
      "1918 bis 1923",
      "1932 bis 1950",
      "1933 bis 1945",
      "1945 bis 1989",
    ],
    correctAnswer: 2,
  },
  {
    id: 153,
    question: "Was war am 8. Mai 1945?",
    answers: [
      "Tod Adolf Hitlers",
      "Beginn des Berliner Mauerbaus",
      "Wahl von Konrad Adenauer zum Bundeskanzler",
      "Ende des Zweiten Weltkriegs in Europa",
    ],
    correctAnswer: 3,
  },
  {
    id: 154,
    question: "Wann war der Zweite Weltkrieg zu Ende?",
    answers: ["1933", "1945", "1949", "1961"],
    correctAnswer: 1,
  },
  {
    id: 155,
    question: "Wann waren die Nationalsozialisten in Deutschland an der Macht?",
    answers: [
      "1888 bis 1918",
      "1921 bis 1934",
      "1933 bis 1945",
      "1949 bis 1963",
    ],
    correctAnswer: 2,
  },
  {
    id: 156,
    question: "In welchem Jahr wurde Hitler Reichskanzler?",
    answers: ["1923", "1927", "1933", "1936"],
    correctAnswer: 2,
  },
  {
    id: 157,
    question:
      "Die Nationalsozialisten mit Adolf Hitler errichteten 1933 in Deutschland …",
    answers: [
      "eine Diktatur.",
      "einen demokratischen Staat.",
      "eine Monarchie.",
      "ein Fürstentum.",
    ],
    correctAnswer: 0,
  },
  {
    id: 158,
    question: 'Das "Dritte Reich" war eine …',
    answers: ["Diktatur.", "Demokratie.", "Monarchie.", "Räterepublik."],
    correctAnswer: 0,
  },
  {
    id: 159,
    question:
      "Was gab es in Deutschland nicht während der Zeit des Nationalsozialismus?",
    answers: [
      "freie Wahlen",
      "Pressezensur",
      "willkürliche Verhaftungen",
      "Verfolgung der Juden",
    ],
    correctAnswer: 0,
  },
  {
    id: 160,
    question: "Welcher Krieg dauerte von 1939 bis 1945?",
    answers: [
      "der Erste Weltkrieg",
      "der Zweite Weltkrieg",
      "der Vietnamkrieg",
      "der Golfkrieg",
    ],
    correctAnswer: 1,
  },
  {
    id: 161,
    question: "Was kennzeichnete den NS-Staat? Eine Politik …",
    answers: [
      "des staatlichen Rassismus",
      "der Meinungsfreiheit",
      "der allgemeinen Religionsfreiheit",
      "der Entwicklung der Demokratie",
    ],
    correctAnswer: 0,
  },
  {
    id: 162,
    question: "Claus Schenk Graf von Stauffenberg wurde bekannt durch …",
    answers: [
      "eine Goldmedaille bei den Olympischen Spielen 1936.",
      "den Bau des Reichstagsgebäudes.",
      "den Aufbau der Wehrmacht.",
      "das Attentat auf Hitler am 20. Juli 1944.",
    ],
    correctAnswer: 3,
  },
  {
    id: 163,
    question:
      "In welchem Jahr zerstörten die Nationalsozialisten Synagogen und jüdische Geschäfte in Deutschland?",
    answers: ["1925", "1930", "1938", "1945"],
    correctAnswer: 2,
  },
  {
    id: 164,
    question: "Was passierte am 9. November 1938 in Deutschland?",
    answers: [
      "Mit dem Angriff auf Polen beginnt der Zweite Weltkrieg.",
      "Die Nationalsozialisten verlieren eine Wahl und lösen den Reichstag auf.",
      "Jüdische Geschäfte und Synagogen werden durch Nationalsozialisten und ihre Anhänger zerstört.",
      "Hitler wird Reichspräsident und lässt alle Parteien verbieten.",
    ],
    correctAnswer: 2,
  },
  {
    id: 165,
    question:
      "Wie hieß der erste Bundeskanzler der Bundesrepublik Deutschland?",
    answers: [
      "Konrad Adenauer",
      "Kurt Georg Kiesinger",
      "Helmut Schmidt",
      "Willy Brandt",
    ],
    correctAnswer: 0,
  },
  {
    id: 166,
    question:
      'Bei welchen Demonstrationen in Deutschland riefen die Menschen "Wir sind das Volk"?',
    answers: [
      "bei den Montagsdemonstrationen 1989 in der DDR",
      "beim Arbeiteraufstand 1953 in der DDR",
      "bei den Demonstrationen 1968 in der Bundesrepublik Deutschland",
      "bei den Anti-Atomkraft-Demonstrationen 1985 in der Bundesrepublik Deutschland",
    ],
    correctAnswer: 0,
  },
  {
    id: 167,
    question:
      'Welche Länder wurden nach dem Zweiten Weltkrieg in Deutschland als "Alliierte Besatzungsmächte" bezeichnet?',
    answers: [
      "Sowjetunion, Großbritannien, Polen, Schweden",
      "Frankreich, Sowjetunion, Italien, Japan",
      "USA, Sowjetunion, Spanien, Portugal",
      "USA, Sowjetunion, Großbritannien, Frankreich",
    ],
    correctAnswer: 3,
  },
  {
    id: 168,
    question:
      'Welches Land war keine "Alliierte Besatzungsmacht" in Deutschland?',
    answers: ["USA", "Sowjetunion", "Frankreich", "Japan"],
    correctAnswer: 3,
  },
  {
    id: 169,
    question: "Wann wurde die Bundesrepublik Deutschland gegründet?",
    answers: ["1939", "1945", "1949", "1951"],
    correctAnswer: 2,
  },
  {
    id: 170,
    question:
      "Was gab es während der Zeit des Nationalsozialismus in Deutschland?",
    answers: [
      "das Recht zur freien Entfaltung der Persönlichkeit",
      "Pressefreiheit",
      "das Verbot von Parteien",
      "den Schutz der Menschenwürde",
    ],
    correctAnswer: 2,
  },
  {
    id: 171,
    question: "Soziale Marktwirtschaft bedeutet, die Wirtschaft …",
    answers: [
      "steuert sich allein nach Angebot und Nachfrage.",
      "wird vom Staat geplant und gesteuert, Angebot und Nachfrage werden nicht berücksichtigt.",
      "richtet sich nach der Nachfrage im Ausland.",
      "richtet sich nach Angebot und Nachfrage, aber der Staat sorgt für einen sozialen Ausgleich.",
    ],
    correctAnswer: 3,
  },
  {
    id: 172,
    question: "In welcher Besatzungszone wurde die DDR gegründet? In der …",
    answers: [
      "amerikanischen Besatzungszone.",
      "französischen Besatzungszone.",
      "britischen Besatzungszone.",
      "sowjetischen Besatzungszone.",
    ],
    correctAnswer: 3,
  },
  {
    id: 173,
    question: "Die Bundesrepublik Deutschland ist ein Gründungsmitglied …",
    answers: [
      "des Nordatlantikpakts (NATO).",
      "der Vereinten Nationen (VN).",
      "der Europäischen Union (EU).",
      "des Warschauer Pakts.",
    ],
    correctAnswer: 2,
  },
  {
    id: 174,
    question: "Wann wurde die DDR gegründet?",
    answers: ["1947", "1949", "1953", "1956"],
    correctAnswer: 1,
  },
  {
    id: 175,
    question:
      "Wie viele Besatzungszonen gab es in Deutschland nach dem Zweiten Weltkrieg?",
    answers: ["3", "4", "5", "6"],
    correctAnswer: 1,
  },
  {
    id: 176,
    question: "Wie waren die Besatzungszonen Deutschlands nach 1945 verteilt?",
    answers: [
      "1=Großbritannien, 2=Sowjetunion, 3=Frankreich, 4=USA",
      "1=Sowjetunion, 2=Großbritannien, 3=USA, 4=Frankreich",
      "1=Großbritannien, 2=Sowjetunion, 3=USA, 4=Frankreich",
      "1=Großbritannien, 2=USA, 3=Sowjetunion, 4=Frankreich",
    ],
    correctAnswer: 2,
    imageUrl: "images/176.png",
  },
  {
    id: 177,
    question:
      "Welche deutsche Stadt wurde nach dem Zweiten Weltkrieg in vier Sektoren aufgeteilt?",
    answers: ["München", "Berlin", "Dresden", "Frankfurt/Oder"],
    correctAnswer: 1,
  },
  {
    id: 178,
    question:
      "Vom Juni 1948 bis zum Mai 1949 wurden die Bürger und Bürgerinnen von West-Berlin durch eine Luftbrücke versorgt. Welcher Umstand war dafür verantwortlich?",
    answers: [
      "Für Frankreich war eine Versorgung der West-Berliner Bevölkerung mit dem Flugzeug kostengünstiger.",
      "Die amerikanischen Soldaten / Soldatinnen hatten beim Landtransport Angst vor Überfällen.",
      "Für Großbritannien war die Versorgung über die Luftbrücke schneller.",
      "Die Sowjetunion unterbrach den gesamten Verkehr auf dem Landwege.",
    ],
    correctAnswer: 3,
  },
  {
    id: 179,
    question: "Wie endete der Zweite Weltkrieg in Europa offiziell?",
    answers: [
      "mit dem Tod Adolf Hitlers",
      "durch die bedingungslose Kapitulation Deutschlands",
      "mit dem Rückzug der Deutschen aus den besetzten Gebieten",
      "durch eine Revolution in Deutschland",
    ],
    correctAnswer: 1,
  },
  {
    id: 180,
    question: "Der erste Bundeskanzler der Bundesrepublik Deutschland war …",
    answers: [
      "Ludwig Erhard.",
      "Willy Brandt.",
      "Konrad Adenauer.",
      "Gerhard Schröder.",
    ],
    correctAnswer: 2,
  },
  {
    id: 181,
    question:
      "Was wollte Willy Brandt mit seinem Kniefall 1970 im ehemaligen jüdischen Ghetto in Warschau ausdrücken?",
    answers: [
      "Er hat sich den ehemaligen Alliierten unterworfen.",
      "Er bat Polen und die polnischen Juden um Vergebung.",
      "Er zeigte seine Demut vor dem Warschauer Pakt.",
      "Er sprach ein Gebet am Grab des Unbekannten Soldaten.",
    ],
    correctAnswer: 1,
    imageUrl: "images/181.png",
  },
  {
    id: 182,
    question:
      "Welche Parteien wurden 1946 zwangsweise zur SED vereint, der Einheitspartei der späteren DDR?",
    answers: ["KPD und SPD", "SPD und CDU", "CDU und FDP", "KPD und CSU"],
    correctAnswer: 0,
  },
  {
    id: 183,
    question:
      'Wann war in der Bundesrepublik Deutschland das "Wirtschaftswunder"?',
    answers: ["40er Jahre", "50er Jahre", "70er Jahre", "80er Jahre"],
    correctAnswer: 1,
  },
  {
    id: 184,
    question:
      'Was nannten die Menschen in Deutschland sehr lange "Die Stunde Null"?',
    answers: [
      "Damit wird die Zeit nach der Wende im Jahr 1989 bezeichnet.",
      "Damit wurde der Beginn des Zweiten Weltkrieges bezeichnet.",
      "Darunter verstand man das Ende des Zweiten Weltkrieges und den Beginn des Wiederaufbaus.",
      "Damit ist die Stunde gemeint, in der die Uhr von der Sommerzeit auf die Winterzeit umgestellt wird.",
    ],
    correctAnswer: 2,
  },
  {
    id: 185,
    question:
      'Wofür stand der Ausdruck "Eiserner Vorhang"? Für die Abschottung …',
    answers: [
      "des Warschauer Pakts gegen den Westen.",
      "Norddeutschlands gegen Süddeutschland.",
      "Nazi-Deutschlands gegen die Alliierten.",
      "Europas gegen die USA.",
    ],
    correctAnswer: 0,
  },
  {
    id: 186,
    question:
      "Im Jahr 1953 gab es in der DDR einen Aufstand, an den lange Zeit in der Bundesrepublik Deutschland ein Feiertag erinnerte. Wann war das?",
    answers: ["1. Mai", "17. Juni", "20. Juli", "9. November"],
    correctAnswer: 1,
  },
  {
    id: 187,
    question:
      "Welcher deutsche Staat hatte eine schwarz-rot-goldene Flagge mit Hammer, Zirkel und Ährenkranz?",
    answers: [
      "Preußen",
      "Bundesrepublik Deutschland",
      "DDR",
      '"Drittes Reich"',
    ],
    correctAnswer: 2,
    imageUrl: "images/187.png",
  },
  {
    id: 188,
    question: "In welchem Jahr wurde die Mauer in Berlin gebaut?",
    answers: ["1953", "1956", "1959", "1961"],
    correctAnswer: 3,
  },
  {
    id: 189,
    question: "Wann baute die DDR die Mauer in Berlin?",
    answers: ["1919", "1933", "1961", "1990"],
    correctAnswer: 2,
  },
  {
    id: 190,
    question: "Was bedeutet die Abkürzung DDR?",
    answers: [
      "Dritter Deutscher Rundfunk",
      "Die Deutsche Republik",
      "Dritte Deutsche Republik",
      "Deutsche Demokratische Republik",
    ],
    correctAnswer: 3,
  },
  {
    id: 191,
    question: "Wann wurde die Mauer in Berlin für alle geöffnet?",
    answers: ["1987", "1989", "1992", "1995"],
    correctAnswer: 1,
  },
  {
    id: 192,
    question:
      "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
    answers: ["Brandenburg", "Bayern", "Saarland", "Hessen"],
    correctAnswer: 0,
  },
  {
    id: 193,
    question: "Von 1961 bis 1989 war Berlin …",
    answers: [
      "ohne Bürgermeister.",
      "ein eigener Staat.",
      "durch eine Mauer geteilt.",
      "nur mit dem Flugzeug erreichbar.",
    ],
    correctAnswer: 2,
  },
  {
    id: 194,
    question: "Am 3. Oktober feiert man in Deutschland den Tag der Deutschen …",
    answers: ["Einheit.", "Nation.", "Bundesländer.", "Städte."],
    correctAnswer: 0,
  },
  {
    id: 195,
    question:
      "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
    answers: ["Hessen", "Sachsen-Anhalt", "Nordrhein-Westfalen", "Saarland"],
    correctAnswer: 1,
  },
  {
    id: 196,
    question:
      'Warum nennt man die Zeit im Herbst 1989 in der DDR "Die Wende"? In dieser Zeit veränderte sich die DDR politisch …',
    answers: [
      "von einer Diktatur zur Demokratie.",
      "von einer liberalen Marktwirtschaft zum Sozialismus.",
      "von einer Monarchie zur Sozialdemokratie.",
      "von einem religiösen Staat zu einem kommunistischen Staat.",
    ],
    correctAnswer: 0,
  },
  {
    id: 197,
    question:
      "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
    answers: ["Thüringen", "Hessen", "Bayern", "Bremen"],
    correctAnswer: 0,
  },
  {
    id: 198,
    question:
      "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
    answers: ["Bayern", "Niedersachsen", "Sachsen", "Baden-Württemberg"],
    correctAnswer: 2,
  },
  {
    id: 199,
    question: 'Mit der Abkürzung "Stasi" meinte man in der DDR …',
    answers: [
      "das Parlament.",
      "das Ministerium für Staatssicherheit.",
      "eine regierende Partei.",
      "das Ministerium für Volksbildung.",
    ],
    correctAnswer: 1,
  },
  {
    id: 200,
    question:
      "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
    answers: [
      "Hessen",
      "Schleswig-Holstein",
      "Mecklenburg-Vorpommern",
      "Saarland",
    ],
    correctAnswer: 2,
  },
  {
    id: 201,
    question:
      "Welche der folgenden Auflistungen enthält nur Bundesländer, die zum Gebiet der früheren DDR gehörten?",
    answers: [
      "Niedersachsen, Nordrhein-Westfalen, Hessen, Schleswig-Holstein, Brandenburg",
      "Mecklenburg-Vorpommern, Brandenburg, Sachsen, Sachsen-Anhalt, Thüringen",
      "Bayern, Baden-Württemberg, Rheinland-Pfalz, Thüringen, Sachsen",
      "Sachsen, Thüringen, Hessen, Niedersachsen, Brandenburg",
    ],
    correctAnswer: 1,
  },
  {
    id: 202,
    question: 'Zu wem gehörte die DDR im "Kalten Krieg"?',
    answers: [
      "zu den Westmächten",
      "zum Warschauer Pakt",
      "zur NATO",
      "zu den blockfreien Staaten",
    ],
    correctAnswer: 1,
  },
  {
    id: 203,
    question: "Wie hieß das Wirtschaftssystem der DDR?",
    answers: [
      "Marktwirtschaft",
      "Planwirtschaft",
      "Angebot und Nachfrage",
      "Kapitalismus",
    ],
    correctAnswer: 1,
  },
  {
    id: 204,
    question:
      "Wie wurden die Bundesrepublik Deutschland und die DDR zu einem Staat?",
    answers: [
      "Die Bundesrepublik Deutschland hat die DDR besetzt.",
      "Die heutigen fünf östlichen Bundesländer sind der Bundesrepublik Deutschland beigetreten.",
      "Die westlichen Bundesländer sind der DDR beigetreten.",
      "Die DDR hat die Bundesrepublik Deutschland besetzt.",
    ],
    correctAnswer: 1,
  },
  {
    id: 205,
    question:
      "Mit dem Beitritt der DDR zur Bundesrepublik Deutschland gehören die neuen Bundesländer nun auch …",
    answers: [
      "zur Europäischen Union.",
      "zum Warschauer Pakt.",
      "zur OPEC.",
      "zur Europäischen Verteidigungsgemeinschaft.",
    ],
    correctAnswer: 0,
  },
  {
    id: 206,
    question:
      'Was bedeutete im Jahr 1989 in Deutschland das Wort "Montagsdemonstration"?',
    answers: [
      "In der Bundesrepublik waren Demonstrationen nur am Montag erlaubt.",
      "Montags waren Demonstrationen gegen das DDR-Regime.",
      "Am ersten Montag im Monat trafen sich in der Bundesrepublik Deutschland Demonstranten.",
      "Montags demonstrierte man in der DDR gegen den Westen.",
    ],
    correctAnswer: 1,
  },
  {
    id: 207,
    question: "In welchem Militärbündnis war die DDR Mitglied?",
    answers: [
      "in der NATO",
      "im Rheinbund",
      "im Warschauer Pakt",
      "im Europabündnis",
    ],
    correctAnswer: 2,
  },
  {
    id: 208,
    question: 'Was war die "Stasi"?',
    answers: [
      'der Geheimdienst im "Dritten Reich"',
      "eine berühmte deutsche Gedenkstätte",
      "der Geheimdienst der DDR",
      "ein deutscher Sportverein während des Zweiten Weltkrieges",
    ],
    correctAnswer: 2,
  },
  {
    id: 209,
    question: "Welches war das Wappen der Deutschen Demokratischen Republik?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: 3,
    imageUrl: "images/209.png",
  },
  {
    id: 210,
    question: "Was ereignete sich am 17. Juni 1953 in der DDR?",
    answers: [
      "der feierliche Beitritt zum Warschauer Pakt",
      "landesweite Streiks und ein Volksaufstand",
      "der 1. SED-Parteitag",
      "der erste Besuch Fidel Castros",
    ],
    correctAnswer: 1,
  },
  {
    id: 211,
    question: 'Welcher Politiker steht für die "Ostverträge"?',
    answers: [
      "Helmut Kohl",
      "Willy Brandt",
      "Michail Gorbatschow",
      "Ludwig Erhard",
    ],
    correctAnswer: 1,
  },
  {
    id: 212,
    question: "Wie heißt Deutschland mit vollem Namen?",
    answers: [
      "Bundesstaat Deutschland",
      "Bundesländer Deutschland",
      "Bundesrepublik Deutschland",
      "Bundesbezirk Deutschland",
    ],
    correctAnswer: 2,
  },
  {
    id: 213,
    question: "Wie viele Einwohner hat Deutschland?",
    answers: ["70 Millionen", "78 Millionen", "80 Millionen", "90 Millionen"],
    correctAnswer: 2,
  },
  {
    id: 214,
    question: "Welche Farben hat die deutsche Flagge?",
    answers: [
      "schwarz-rot-gold",
      "rot-weiß-schwarz",
      "schwarz-rot-grün",
      "schwarz-gelb-rot",
    ],
    correctAnswer: 0,
  },
  {
    id: 215,
    question: 'Wer wird als "Kanzler der Deutschen Einheit" bezeichnet?',
    answers: [
      "Gerhard Schröder",
      "Helmut Kohl",
      "Konrad Adenauer",
      "Helmut Schmidt",
    ],
    correctAnswer: 1,
  },
  {
    id: 216,
    question:
      "Welches Symbol ist im Plenarsaal des Deutschen Bundestages zu sehen?",
    answers: [
      "die Fahne der Stadt Berlin.",
      "der Bundesadler.",
      "der Reichsadler.",
      "die Reichskrone.",
    ],
    correctAnswer: 1,
    imageUrl: "images/216.png",
  },
  {
    id: 217,
    question:
      "In welchem Zeitraum gab es die Deutsche Demokratische Republik (DDR)?",
    answers: [
      "1919 bis 1927",
      "1933 bis 1945",
      "1949 bis 1990",
      "1945 bis 1961",
    ],
    correctAnswer: 2,
  },
  {
    id: 218,
    question:
      "Wie viele Bundesländer kamen bei der Wiedervereinigung 1990 zur Bundesrepublik Deutschland hinzu?",
    answers: ["4", "5", "6", "7"],
    correctAnswer: 1,
  },
  {
    id: 219,
    question: "Die Bundesrepublik Deutschland hat die Grenzen von heute seit …",
    answers: ["1933.", "1949.", "1971.", "1990."],
    correctAnswer: 3,
  },
  {
    id: 220,
    question:
      "Der 27. Januar ist in Deutschland ein offizieller Gedenktag. Woran erinnert dieser Tag?",
    answers: [
      "an das Ende des Zweiten Weltkrieges",
      "an die Verabschiedung des Grundgesetzes",
      "an die Wiedervereinigung Deutschlands",
      "an die Opfer des Nationalsozialismus",
    ],
    correctAnswer: 3,
  },
  {
    id: 221,
    question:
      "Deutschland ist Mitglied des Schengener Abkommens. Was bedeutet das?",
    answers: [
      "Deutsche können in viele Länder Europas ohne Passkontrolle reisen.",
      "Alle Menschen können ohne Personenkontrolle in Deutschland einreisen.",
      "Deutsche können ohne Passkontrolle in jedes Land reisen.",
      "Deutsche können in jedem Land mit dem Euro bezahlen.",
    ],
    correctAnswer: 0,
  },
  {
    id: 222,
    question: "Welches Land ist ein Nachbarland von Deutschland?",
    answers: ["Ungarn", "Portugal", "Spanien", "Schweiz"],
    correctAnswer: 3,
  },
  {
    id: 223,
    question: "Welches Land ist ein Nachbarland von Deutschland?",
    answers: ["Rumänien", "Bulgarien", "Polen", "Griechenland"],
    correctAnswer: 2,
  },
  {
    id: 224,
    question: "Was bedeutet die Abkürzung EU?",
    answers: [
      "Europäische Unternehmen",
      "Europäische Union",
      "Einheitliche Union",
      "Euro Union",
    ],
    correctAnswer: 1,
  },
  {
    id: 225,
    question:
      "In welchem anderen Land gibt es eine große deutschsprachige Bevölkerung?",
    answers: ["Tschechien", "Norwegen", "Spanien", "Österreich"],
    correctAnswer: 3,
  },
  {
    id: 226,
    question: "Welche ist die Flagge der Europäischen Union?",
    answers: ["2", "1", "4", "3"],
    correctAnswer: 0,
    imageUrl: "images/226.png",
  },
  {
    id: 227,
    question: "Welches Land ist ein Nachbarland von Deutschland?",
    answers: ["Finnland", "Dänemark", "Norwegen", "Schweden"],
    correctAnswer: 1,
  },
  {
    id: 228,
    question:
      "Wie wird der Beitritt der DDR zur Bundesrepublik Deutschland im Jahr 1990 allgemein genannt?",
    answers: [
      "NATO-Osterweiterung",
      "EU-Osterweiterung",
      "Europäische Gemeinschaft",
      "Deutsche Wiedervereinigung",
    ],
    correctAnswer: 3,
  },
  {
    id: 229,
    question: "Welches Land ist ein Nachbarland von Deutschland?",
    answers: ["Spanien", "Bulgarien", "Norwegen", "Luxemburg"],
    correctAnswer: 3,
  },
  {
    id: 230,
    question:
      "Das Europäische Parlament wird regelmäßig gewählt, nämlich alle …",
    answers: ["5 Jahre.", "6 Jahre.", "7 Jahre.", "8 Jahre."],
    correctAnswer: 0,
  },
  {
    id: 231,
    question: 'Was bedeutet der Begriff "europäische Integration"?',
    answers: [
      "Damit sind amerikanische Einwanderer in Europa gemeint.",
      "Der Begriff meint den Einwanderungsstopp nach Europa.",
      "Damit sind europäische Auswanderer in den USA gemeint.",
      "Der Begriff meint den Zusammenschluss europäischer Staaten zur EU.",
    ],
    correctAnswer: 3,
  },
  {
    id: 232,
    question: "Wer wird bei der Europawahl gewählt?",
    answers: [
      "die Europäische Kommission",
      "die Länder, die in die EU eintreten dürfen",
      "die europäische Verfassung",
      "die Abgeordneten des Europäischen Parlaments",
    ],
    correctAnswer: 3,
  },
  {
    id: 233,
    question: "Welches Land ist ein Nachbarland von Deutschland?",
    answers: ["Tschechien", "Bulgarien", "Griechenland", "Portugal"],
    correctAnswer: 0,
  },
  {
    id: 234,
    question: "Wo ist der Sitz des Europäischen Parlaments?",
    answers: ["London", "Paris", "Berlin", "Straßburg"],
    correctAnswer: 3,
  },
  {
    id: 235,
    question:
      "Der französische Staatspräsident François Mitterrand und der deutsche Bundeskanzler Helmut Kohl gedenken in Verdun gemeinsam der Toten beider Weltkriege. Welches Ziel der Europäischen Union wird bei diesem Treffen deutlich?",
    answers: [
      "Freundschaft zwischen England und Deutschland",
      "Reisefreiheit in alle Länder der EU",
      "Frieden und Sicherheit in den Ländern der EU",
      "einheitliche Feiertage in den Ländern der EU",
    ],
    correctAnswer: 2,
    imageUrl: "images/235.png",
  },
  {
    id: 236,
    question: "Wie viele Mitgliedstaaten hat die EU heute?",
    answers: ["21", "23", "25", "27"],
    correctAnswer: 3,
  },
  {
    id: 237,
    question:
      '2007 wurde das 50-jährige Jubiläum der "Römischen Verträge" gefeiert. Was war der Inhalt der Verträge?',
    answers: [
      "Beitritt Deutschlands zur NATO",
      "Gründung der Europäischen Wirtschaftsgemeinschaft (EWG)",
      "Verpflichtung Deutschlands zu Reparationsleistungen",
      "Festlegung der Oder-Neiße-Linie als Ostgrenze",
    ],
    correctAnswer: 1,
  },
  {
    id: 238,
    question: "An welchen Orten arbeitet das Europäische Parlament?",
    answers: [
      "Paris, London und Den Haag",
      "Straßburg, Luxemburg und Brüssel",
      "Rom, Bern und Wien",
      "Bonn, Zürich und Mailand",
    ],
    correctAnswer: 1,
  },
  {
    id: 239,
    question:
      "Durch welche Verträge schloss sich die Bundesrepublik Deutschland mit anderen Staaten zur Europäischen Wirtschaftsgemeinschaft zusammen?",
    answers: [
      'durch die "Hamburger Verträge"',
      'durch die "Römischen Verträge"',
      'durch die "Pariser Verträge"',
      'durch die "Londoner Verträge"',
    ],
    correctAnswer: 1,
  },
  {
    id: 240,
    question: "Seit wann bezahlt man in Deutschland mit dem Euro in bar?",
    answers: ["1995", "1998", "2002", "2005"],
    correctAnswer: 2,
  },
  {
    id: 241,
    question:
      "Frau Seger bekommt ein Kind. Was muss sie tun, um Elterngeld zu erhalten?",
    answers: [
      "Sie muss an ihre Krankenkasse schreiben.",
      "Sie muss nichts tun, denn sie bekommt automatisch Elterngeld.",
      "Sie muss einen Antrag bei der Elterngeldstelle stellen.",
      "Sie muss das Arbeitsamt um Erlaubnis bitten.",
    ],
    correctAnswer: 2,
  },
  {
    id: 242,
    question:
      "Wer entscheidet, ob ein Kind in Deutschland in den Kindergarten geht?",
    answers: [
      "der Staat",
      "die Bundesländer",
      "die Eltern / die Erziehungsberechtigten",
      "die Schulen",
    ],
    correctAnswer: 2,
  },
  {
    id: 243,
    question:
      "Maik und Sybille wollen mit Freunden an ihrem deutschen Wohnort eine Demonstration auf der Straße abhalten. Was müssen sie vorher tun?",
    answers: [
      "Sie müssen nichts tun. Man darf in Deutschland jederzeit überall demonstrieren.",
      "Sie müssen die Demonstration anmelden.",
      "Sie können gar nichts tun, denn Demonstrationen sind in Deutschland grundsätzlich verboten.",
      "Maik und Sybille müssen einen neuen Verein gründen, weil nur Vereine demonstrieren dürfen.",
    ],
    correctAnswer: 1,
  },
  {
    id: 244,
    question:
      "Welchen Schulabschluss braucht man normalerweise, um an einer Universität in Deutschland ein Studium zu beginnen?",
    answers: [
      "das Abitur",
      "ein Diplom",
      "die Prokura",
      "eine Gesellenprüfung",
    ],
    correctAnswer: 0,
  },
  {
    id: 245,
    question: "Wer darf in Deutschland nicht als Paar zusammenleben?",
    answers: [
      "Hans (20 Jahre) und Marie (19 Jahre)",
      "Tom (20 Jahre) und Klaus (45 Jahre)",
      "Sofie (35 Jahre) und Lisa (40 Jahre)",
      "Anne (13 Jahre) und Tim (25 Jahre)",
    ],
    correctAnswer: 3,
  },
  {
    id: 246,
    question: "Ab welchem Alter ist man in Deutschland volljährig?",
    answers: ["16", "18", "19", "21"],
    correctAnswer: 1,
  },
  {
    id: 247,
    question:
      "Eine Frau ist schwanger. Sie ist kurz vor und nach der Geburt ihres Kindes vom Gesetz besonders beschützt. Wie heißt dieser Schutz?",
    answers: [
      "Elternzeit",
      "Geburtsvorbereitung",
      "Mutterschutz",
      "Wochenbett",
    ],
    correctAnswer: 2,
  },
  {
    id: 248,
    question: "Die Erziehung der Kinder ist in Deutschland vor allem Aufgabe …",
    answers: ["des Staates.", "der Eltern.", "der Großeltern.", "der Schulen."],
    correctAnswer: 1,
  },
  {
    id: 249,
    question:
      "Wer ist in Deutschland hauptsächlich verantwortlich für die Kindererziehung?",
    answers: ["der Staat", "die Eltern", "die Verwandten", "die Schulen"],
    correctAnswer: 1,
  },
  {
    id: 250,
    question:
      "In Deutschland hat man die besten Chancen auf einen gut bezahlten Arbeitsplatz, wenn man …",
    answers: [
      "katholisch ist.",
      "gut ausgebildet ist.",
      "eine Frau ist.",
      "Mitglied einer Partei ist.",
    ],
    correctAnswer: 1,
  },
  {
    id: 251,
    question: "Wenn man in Deutschland ein Kind schlägt, …",
    answers: [
      "geht das niemanden etwas an.",
      "geht das nur die Familie etwas an.",
      "kann man dafür nicht bestraft werden.",
      "kann man dafür bestraft werden.",
    ],
    correctAnswer: 3,
  },
  {
    id: 252,
    question: "In Deutschland …",
    answers: [
      "darf man zur gleichen Zeit nur mit einem Partner / einer Partnerin verheiratet sein.",
      "kann man mehrere Ehepartner / Ehepartnerinnen gleichzeitig haben.",
      "darf man nicht wieder heiraten, wenn man einmal verheiratet war.",
      "darf eine Frau nicht wieder heiraten, wenn ihr Mann gestorben ist.",
    ],
    correctAnswer: 0,
  },
  {
    id: 253,
    question: "Wo müssen Sie sich anmelden, wenn Sie in Deutschland umziehen?",
    answers: [
      "beim Einwohnermeldeamt",
      "beim Standesamt",
      "beim Ordnungsamt",
      "beim Gewerbeamt",
    ],
    correctAnswer: 0,
  },
  {
    id: 254,
    question:
      'In Deutschland dürfen Ehepaare sich scheiden lassen. Meistens müssen sie dazu das "Trennungsjahr" einhalten. Was bedeutet das?',
    answers: [
      "Der Scheidungsprozess dauert ein Jahr.",
      "Mann und Frau sind ein Jahr verheiratet, dann ist die Scheidung möglich.",
      "Das Besuchsrecht für die Kinder gilt ein Jahr.",
      "Mann und Frau führen mindestens ein Jahr getrennt ihr eigenes Leben. Danach ist die Scheidung möglich.",
    ],
    correctAnswer: 3,
  },
  {
    id: 255,
    question:
      "Bei Erziehungsproblemen können Eltern in Deutschland Hilfe erhalten vom …",
    answers: ["Ordnungsamt.", "Schulamt.", "Jugendamt.", "Gesundheitsamt."],
    correctAnswer: 2,
  },
  {
    id: 256,
    question:
      "Ein Ehepaar möchte in Deutschland ein Restaurant eröffnen. Was braucht es dazu unbedingt?",
    answers: [
      "eine Erlaubnis der Polizei",
      "eine Genehmigung einer Partei",
      "eine Genehmigung des Einwohnermeldeamts",
      "eine Gaststättenerlaubnis von der zuständigen Behörde",
    ],
    correctAnswer: 3,
  },
  {
    id: 257,
    question:
      "Eine erwachsene Frau möchte in Deutschland das Abitur nachholen. Das kann sie an …",
    answers: [
      "einer Hochschule.",
      "einem Abendgymnasium.",
      "einer Hauptschule.",
      "einer Privatuniversität.",
    ],
    correctAnswer: 1,
  },
  {
    id: 258,
    question: "Was darf das Jugendamt in Deutschland?",
    answers: [
      "Es entscheidet, welche Schule das Kind besucht.",
      "Es kann ein Kind, das geschlagen wird oder hungern muss, aus der Familie nehmen.",
      "Es bezahlt das Kindergeld an die Eltern.",
      "Es kontrolliert, ob das Kind einen Kindergarten besucht.",
    ],
    correctAnswer: 1,
  },
  {
    id: 259,
    question:
      "Das Berufsinformationszentrum BIZ bei der Bundesagentur für Arbeit in Deutschland hilft bei der …",
    answers: [
      "Rentenberechnung.",
      "Lehrstellensuche.",
      "Steuererklärung.",
      "Krankenversicherung.",
    ],
    correctAnswer: 1,
  },
  {
    id: 260,
    question: "In Deutschland hat ein Kind in der Schule …",
    answers: [
      "Recht auf unbegrenzte Freizeit.",
      "Wahlfreiheit für alle Fächer.",
      "Anspruch auf Schulgeld.",
      "Anwesenheitspflicht.",
    ],
    correctAnswer: 3,
  },
  {
    id: 261,
    question:
      "Ein Mann möchte mit 30 Jahren in Deutschland sein Abitur nachholen. Wo kann er das tun? An …",
    answers: [
      "einer Hochschule",
      "einem Abendgymnasium",
      "einer Hauptschule",
      "einer Privatuniversität",
    ],
    correctAnswer: 1,
  },
  {
    id: 262,
    question: "Was bedeutet in Deutschland der Grundsatz der Gleichbehandlung?",
    answers: [
      "Niemand darf z.B. wegen einer Behinderung benachteiligt werden.",
      "Man darf andere Personen benachteiligen, wenn ausreichende persönliche Gründe hierfür vorliegen.",
      "Niemand darf gegen Personen klagen, wenn sie benachteiligt wurden.",
      "Es ist für alle Gesetz, benachteiligten Gruppen jährlich Geld zu spenden.",
    ],
    correctAnswer: 0,
  },
  {
    id: 263,
    question:
      "In Deutschland sind Jugendliche ab 14 Jahren strafmündig. Das bedeutet: Jugendliche, die 14 Jahre und älter sind und gegen Strafgesetze verstoßen, …",
    answers: [
      "werden bestraft.",
      "werden wie Erwachsene behandelt.",
      "teilen die Strafe mit ihren Eltern.",
      "werden nicht bestraft.",
    ],
    correctAnswer: 0,
  },
  {
    id: 264,
    question:
      "Zu welchem Fest tragen Menschen in Deutschland bunte Kostüme und Masken?",
    answers: [
      "am Rosenmontag",
      "am Maifeiertag",
      "beim Oktoberfest",
      "an Pfingsten",
    ],
    correctAnswer: 0,
  },
  {
    id: 265,
    question:
      "Wohin muss man in Deutschland zuerst gehen, wenn man heiraten möchte?",
    answers: [
      "zum Einwohnermeldeamt",
      "zum Ordnungsamt",
      "zur Agentur für Arbeit",
      "zum Standesamt",
    ],
    correctAnswer: 3,
  },
  {
    id: 266,
    question: "Wann beginnt die gesetzliche Nachtruhe in Deutschland?",
    answers: [
      "wenn die Sonne untergeht",
      "um 22 Uhr",
      "wenn die Nachbarn schlafen gehen",
      "um 0 Uhr, Mitternacht",
    ],
    correctAnswer: 1,
  },
  {
    id: 267,
    question:
      "Eine junge Frau in Deutschland, 22 Jahre alt, lebt mit ihrem Freund zusammen. Die Eltern der Frau finden das nicht gut, weil ihnen der Freund nicht gefällt. Was können die Eltern tun?",
    answers: [
      "Sie müssen die Entscheidung der volljährigen Tochter respektieren.",
      "Sie haben das Recht, die Tochter in die elterliche Wohnung zurückzuholen.",
      "Sie können zur Polizei gehen und die Tochter anzeigen.",
      "Sie suchen einen anderen Mann für die Tochter.",
    ],
    correctAnswer: 0,
  },
  {
    id: 268,
    question:
      "Eine junge Frau will den Führerschein machen. Sie hat Angst vor der Prüfung, weil ihre Muttersprache nicht Deutsch ist. Was ist richtig?",
    answers: [
      "Sie muss mindestens zehn Jahre in Deutschland leben, bevor sie den Führerschein machen kann.",
      "Sie kann die Theorie-Prüfung vielleicht in ihrer Muttersprache machen. Es gibt mehr als zehn Sprachen zur Auswahl.",
      "Wenn sie kein Deutsch kann, darf sie keinen Führerschein haben.",
      "Sie muss den Führerschein in dem Land machen, in dem man ihre Sprache spricht.",
    ],
    correctAnswer: 1,
  },
  {
    id: 269,
    question:
      "In Deutschland haben Kinder ab dem Alter von drei Jahren bis zur Ersteinschulung einen Anspruch auf …",
    answers: [
      "monatliches Taschengeld.",
      "einen Kindergartenplatz.",
      "einen Platz in einem Sportverein.",
      "einen Ferienpass.",
    ],
    correctAnswer: 1,
  },
  {
    id: 270,
    question: "Die Volkshochschule in Deutschland ist eine Einrichtung …",
    answers: [
      "für den Religionsunterricht.",
      "nur für Jugendliche.",
      "zur Weiterbildung.",
      "nur für Rentner und Rentnerinnen.",
    ],
    correctAnswer: 2,
  },
  {
    id: 271,
    question: "Was ist in Deutschland ein Brauch zu Weihnachten?",
    answers: [
      "bunte Eier verstecken",
      "einen Tannenbaum schmücken",
      "sich mit Masken und Kostümen verkleiden",
      "Kürbisse vor die Tür stellen",
    ],
    correctAnswer: 1,
  },
  {
    id: 272,
    question: "Welche Lebensform ist in Deutschland nicht erlaubt?",
    answers: [
      "Mann und Frau sind geschieden und leben mit neuen Partnern zusammen.",
      "Zwei Frauen leben zusammen.",
      "Ein alleinerziehender Vater lebt mit seinen zwei Kindern zusammen.",
      "Ein Mann ist mit zwei Frauen zur selben Zeit verheiratet.",
    ],
    correctAnswer: 3,
  },
  {
    id: 273,
    question: "Bei Erziehungsproblemen gehen Sie in Deutschland …",
    answers: [
      "zum Arzt / zur Ärztin.",
      "zum Gesundheitsamt.",
      "zum Einwohnermeldeamt.",
      "zum Jugendamt.",
    ],
    correctAnswer: 3,
  },
  {
    id: 274,
    question:
      "Sie haben in Deutschland absichtlich einen Brief geöffnet, der an eine andere Person adressiert ist. Was haben Sie nicht beachtet?",
    answers: [
      "das Schweigerecht",
      "das Briefgeheimnis",
      "die Schweigepflicht",
      "die Meinungsfreiheit",
    ],
    correctAnswer: 1,
  },
  {
    id: 275,
    question: "Was braucht man in Deutschland für eine Ehescheidung?",
    answers: [
      "die Einwilligung der Eltern",
      "ein Attest eines Arztes / einer Ärztin",
      "die Einwilligung der Kinder",
      "die Unterstützung eines Anwalts / einer Anwältin",
    ],
    correctAnswer: 3,
  },
  {
    id: 276,
    question:
      "Was sollten Sie tun, wenn Sie von Ihrem Ansprechpartner / Ihrer Ansprechpartnerin in einer deutschen Behörde schlecht behandelt werden?",
    answers: [
      "Ich kann nichts tun.",
      "Ich muss mir diese Behandlung gefallen lassen.",
      "Ich drohe der Person.",
      "Ich kann mich beim Behördenleiter / bei der Behördenleiterin beschweren.",
    ],
    correctAnswer: 3,
  },
  {
    id: 277,
    question:
      "Eine Frau, die ein zweijähriges Kind hat, bewirbt sich in Deutschland um eine Stelle. Was ist ein Beispiel für Diskriminierung? Sie bekommt die Stelle nur deshalb nicht, weil sie …",
    answers: [
      "kein Englisch spricht.",
      "zu hohe Gehaltsvorstellungen hat.",
      "keine Erfahrungen in diesem Beruf hat.",
      "Mutter ist.",
    ],
    correctAnswer: 3,
  },
  {
    id: 278,
    question:
      "Ein Mann im Rollstuhl hat sich auf eine Stelle als Buchhalter beworben. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil er …",
    answers: [
      "im Rollstuhl sitzt.",
      "keine Erfahrung hat.",
      "zu hohe Gehaltsvorstellungen hat.",
      "kein Englisch spricht.",
    ],
    correctAnswer: 0,
  },
  {
    id: 279,
    question:
      'In den meisten Mietshäusern in Deutschland gibt es eine "Hausordnung". Was steht in einer solchen "Hausordnung"? Sie nennt …',
    answers: [
      "Regeln für die Benutzung öffentlicher Verkehrsmittel.",
      "alle Mieter und Mieterinnen im Haus.",
      "Regeln, an die sich alle Bewohner und Bewohnerinnen halten müssen.",
      "die Adresse des nächsten Ordnungsamtes.",
    ],
    correctAnswer: 2,
  },
  {
    id: 280,
    question:
      "Wenn Sie sich in Deutschland gegen einen falschen Steuerbescheid wehren wollen, müssen Sie …",
    answers: [
      "nichts machen.",
      "den Bescheid wegwerfen.",
      "Einspruch einlegen.",
      "warten, bis ein anderer Bescheid kommt.",
    ],
    correctAnswer: 2,
  },
  {
    id: 281,
    question:
      "Zwei Freunde wollen in ein öffentliches Schwimmbad in Deutschland. Beide haben eine dunkle Hautfarbe und werden deshalb nicht hineingelassen. Welches Recht wird in dieser Situation verletzt? Das Recht auf …",
    answers: [
      "Meinungsfreiheit",
      "Gleichbehandlung",
      "Versammlungsfreiheit",
      "Freizügigkeit",
    ],
    correctAnswer: 1,
  },
  {
    id: 282,
    question:
      "Welches Ehrenamt müssen deutsche Staatsbürger / Staatsbürgerinnen übernehmen, wenn sie dazu aufgefordert werden?",
    answers: [
      "Vereinstrainer / Vereinstrainerin",
      "Bibliotheksaufsicht",
      "Wahlhelfer / Wahlhelferin",
      "Lehrer / Lehrerin",
    ],
    correctAnswer: 2,
  },
  {
    id: 283,
    question:
      "Was tun Sie, wenn Sie eine falsche Rechnung von einer deutschen Behörde bekommen?",
    answers: [
      "Ich lasse die Rechnung liegen.",
      "Ich lege Widerspruch bei der Behörde ein.",
      "Ich schicke die Rechnung an die Behörde zurück.",
      "Ich gehe mit der Rechnung zum Finanzamt.",
    ],
    correctAnswer: 1,
  },
  {
    id: 284,
    question:
      "Was man für die Arbeit können muss, ändert sich in der Zukunft sehr schnell. Was kann man tun?",
    answers: [
      "Es ist egal, was man lernt.",
      "Kinder lernen in der Schule alles, was im Beruf wichtig ist. Nach der Schule muss man nicht weiter lernen.",
      "Erwachsene müssen auch nach der Ausbildung immer weiter lernen.",
      "Alle müssen früher aufhören zu arbeiten, weil sich alles ändert.",
    ],
    correctAnswer: 2,
  },
  {
    id: 285,
    question:
      "Frau Frost arbeitet als fest angestellte Mitarbeiterin in einem Büro. Was muss sie nicht von ihrem Gehalt bezahlen?",
    answers: [
      "Umsatzsteuer",
      "Lohnsteuer",
      "Beiträge zur Arbeitslosenversicherung",
      "Beiträge zur Renten- und Krankenversicherung",
    ],
    correctAnswer: 0,
  },
  {
    id: 286,
    question:
      "Welche Organisation in einer Firma hilft den Arbeitnehmern und Arbeitnehmerinnen bei Problemen mit dem Arbeitgeber / der Arbeitgeberin?",
    answers: [
      "der Betriebsrat",
      "der Betriebsprüfer / die Betriebsprüferin",
      "die Betriebsgruppe",
      "das Betriebsmanagement",
    ],
    correctAnswer: 0,
  },
  {
    id: 287,
    question:
      "Sie möchten bei einer Firma in Deutschland Ihr Arbeitsverhältnis beenden. Was müssen Sie beachten?",
    answers: [
      "die Gehaltszahlungen",
      "die Arbeitszeit",
      "die Kündigungsfrist",
      "die Versicherungspflicht",
    ],
    correctAnswer: 2,
  },
  {
    id: 288,
    question:
      "Bei welchem Amt muss man in Deutschland in der Regel seinen Hund anmelden?",
    answers: [
      "beim Finanzamt",
      "beim Einwohnermeldeamt",
      "bei der Kommune (Stadt oder Gemeinde)",
      "beim Gesundheitsamt",
    ],
    correctAnswer: 2,
  },
  {
    id: 289,
    question:
      "Ein Mann mit dunkler Hautfarbe bewirbt sich um eine Stelle als Kellner in einem Restaurant in Deutschland. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil …",
    answers: [
      "seine Deutschkenntnisse zu gering sind.",
      "er zu hohe Gehaltsvorstellungen hat.",
      "er eine dunkle Haut hat.",
      "er keine Erfahrungen im Beruf hat.",
    ],
    correctAnswer: 2,
  },
  {
    id: 290,
    question:
      "Sie haben in Deutschland einen Fernseher gekauft. Zu Hause packen Sie den Fernseher aus, doch er funktioniert nicht. Der Fernseher ist kaputt. Was können Sie machen?",
    answers: [
      "eine Anzeige schreiben",
      "den Fernseher reklamieren",
      "das Gerät ungefragt austauschen",
      "die Garantie verlängern",
    ],
    correctAnswer: 1,
  },
  {
    id: 291,
    question:
      "Warum muss man in Deutschland bei der Steuererklärung aufschreiben, ob man zu einer Kirche gehört oder nicht? Weil …",
    answers: [
      "das für die Statistik in Deutschland wichtig ist.",
      "es eine Kirchensteuer gibt, die an die Einkommen- und Lohnsteuer geknüpft ist.",
      "man mehr Steuern zahlen muss, wenn man nicht zu einer Kirche gehört.",
      "die Kirche für die Steuererklärung verantwortlich ist.",
    ],
    correctAnswer: 1,
  },
  {
    id: 292,
    question:
      "Die Menschen in Deutschland leben nach dem Grundsatz der religiösen Toleranz. Was bedeutet das?",
    answers: [
      "Es dürfen keine Moscheen gebaut werden.",
      "Alle Menschen glauben an Gott.",
      "Jeder kann glauben, was er möchte.",
      "Der Staat entscheidet, an welchen Gott die Menschen glauben.",
    ],
    correctAnswer: 2,
  },
  {
    id: 293,
    question: "Was ist in Deutschland ein Brauch an Ostern?",
    answers: [
      "Kürbisse vor die Tür stellen",
      "einen Tannenbaum schmücken",
      "Eier bemalen",
      "Raketen in die Luft schießen",
    ],
    correctAnswer: 2,
  },
  {
    id: 294,
    question: "Pfingsten ist ein …",
    answers: [
      "christlicher Feiertag.",
      "deutscher Gedenktag.",
      "internationaler Trauertag.",
      "bayerischer Brauch.",
    ],
    correctAnswer: 0,
  },
  {
    id: 295,
    question:
      "Welche Religion hat die europäische und deutsche Kultur geprägt?",
    answers: [
      "der Hinduismus",
      "das Christentum",
      "der Buddhismus",
      "der Islam",
    ],
    correctAnswer: 1,
  },
  {
    id: 296,
    question:
      "In Deutschland nennt man die letzten vier Wochen vor Weihnachten …",
    answers: [
      "den Buß- und Bettag.",
      "das Erntedankfest.",
      "die Adventszeit.",
      "Allerheiligen.",
    ],
    correctAnswer: 2,
  },
  {
    id: 297,
    question:
      "Aus welchem Land sind die meisten Migranten / Migrantinnen nach Deutschland gekommen?",
    answers: ["Italien", "Polen", "Marokko", "Türkei"],
    correctAnswer: 3,
  },
  {
    id: 298,
    question: "In der DDR lebten vor allem Migranten aus …",
    answers: [
      "Vietnam, Polen, Mosambik.",
      "Frankreich, Rumänien, Somalia.",
      "Chile, Ungarn, Simbabwe.",
      "Nordkorea, Mexiko, Ägypten.",
    ],
    correctAnswer: 0,
  },
  {
    id: 299,
    question:
      "Ausländische Arbeitnehmer und Arbeitnehmerinnen, die in den 50er und 60er Jahren von der Bundesrepublik Deutschland angeworben wurden, nannte man …",
    answers: [
      "Schwarzarbeiter / Schwarzarbeiterinnen",
      "Gastarbeiter / Gastarbeiterinnen",
      "Zeitarbeiter / Zeitarbeiterinnen",
      "Schichtarbeiter / Schichtarbeiterinnen",
    ],
    correctAnswer: 1,
  },
  {
    id: 300,
    question:
      "Aus welchem Land kamen die ersten Gastarbeiter / Gastarbeiterinnen in die Bundesrepublik Deutschland?",
    answers: ["Italien", "Spanien", "Portugal", "Türkei"],
    correctAnswer: 0,
  },
  {
    id: 301,
    question: "Welches Wappen gehört zum Bundesland Berlin?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: 3,
    imageUrl: "images/301.png",
  },
  {
    id: 302,
    question: "Welches ist ein Bezirk von Berlin?",
    answers: ["Altona", "Prignitz", "Pankow", "Demmin"],
    correctAnswer: 2,
  },
  {
    id: 303,
    question: "Für wie viele Jahre wird das Landesparlament in Berlin gewählt?",
    answers: ["3", "4", "5", "6"],
    correctAnswer: 2,
  },
  {
    id: 304,
    question:
      "Ab welchem Alter darf man in Berlin bei Kommunalwahlen (Wahl der Bezirksverordnetenversammlung) wählen?",
    answers: ["14", "16", "18", "20"],
    correctAnswer: 1,
  },
  {
    id: 305,
    question: "Welche Farben hat die Landesflagge von Berlin?",
    answers: ["blau-weiß-rot", "weiß-rot", "grün-weiß-rot", "schwarz-gold"],
    correctAnswer: 1,
  },
  {
    id: 306,
    question:
      "Wo können Sie sich in Berlin über politische Themen informieren?",
    answers: [
      "beim Ordnungsamt der Gemeinde",
      "bei den Kirchen",
      "bei der Verbraucherzentrale",
      "bei der Landeszentrale für politische Bildung",
    ],
    correctAnswer: 3,
  },
  {
    id: 307,
    question: "Welches Bundesland ist ein Stadtstaat?",
    answers: ["Berlin", "Saarland", "Brandenburg", "Hessen"],
    correctAnswer: 0,
  },
  {
    id: 308,
    question: "Welches Bundesland ist Berlin?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: 3,
    imageUrl: "images/308.png",
  },
  {
    id: 309,
    question:
      "Wie nennt man den Regierungschef / die Regierungschefin des Stadtstaates Berlin?",
    answers: [
      "Ministerpräsident / Ministerpräsidentin",
      "Oberbürgermeister / Oberbürgermeisterin",
      "Präsident / Präsidentin des Senats",
      "Regierender Bürgermeister / Regierende Bürgermeisterin",
    ],
    correctAnswer: 3,
  },
  {
    id: 310,
    question: "Welchen Senator / welche Senatorin hat Berlin nicht?",
    answers: [
      "Finanzsenator / Finanzsenatorin",
      "Innensenator / Innensenatorin",
      "Senator / Senatorin für Außenbeziehungen",
      "Justizsenator / Justizsenatorin",
    ],
    correctAnswer: 2,
  },
];
