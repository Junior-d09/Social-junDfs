import { formatDistanceToNowStrict } from "date-fns";
import { enUS } from "date-fns/locale";

const formatDistanceLocale = {
  lessThanXSeconds: "à l'instant ",
  xSeconds: "à l'instant ",
  halfAMinute: "à l'instant ",
  lessThanXMinutes: "{{count}} min",
  xMinutes: "{{count}} min",
  aboutXHours: "{{count}} h",
  xHours: "{{count}} h",
  xDays: "{{count}} j",
  aboutXWeeks: "{{count}} s",
  xWeeks: "{{count}} s",
  aboutXMonths: "{{count}} mois",
  xMonths: "{{count}} mois",
  aboutXYears: "{{count}} a",
  xYears: "{{count}} a",
  overXYears: "{{count}} a",
  almostXYears: "{{count}} a",
};

function formatDistance(token: string, count: number, options?: any): string {
  options = options || {};

  const result = formatDistanceLocale[
    token as keyof typeof formatDistanceLocale
  ].replace("{{count}}", count.toString());

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return result;
    } else {
      if (result === "à l'instant ") return result;
      return " il y a " + result;
    }
  }

  return result;
}

export function formatTimeToNow(date: Date): string {
  return formatDistanceToNowStrict(date, {
    addSuffix: true,
    locale: {
      ...enUS,
      formatDistance,
    },
  });
}

export function formatNumber(number: number): string {
  if (number < 1000) return number.toString(); // Afficher directement les nombres inférieurs à 1000

  const suffixes = ["", "K", "M", "B", "T"];
  const suffixNum = Math.floor(Math.log10(number) / 3); // Calcul précis pour le suffixe

  // Formater le nombre en le réduisant par des puissances de 1000
  const shortNumber = (number / Math.pow(1000, suffixNum)).toFixed(1);

  return `${shortNumber}${suffixes[suffixNum]}`;
}
