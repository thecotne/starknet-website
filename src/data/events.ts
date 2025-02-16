import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON, getMDXModule } from "./utils";

export interface Event {
  readonly name: string;
  readonly image: string;
  readonly start_date: string;
  readonly end_date: string;
  readonly location: string;
  readonly city: string;
  readonly venue: string;
  readonly type: string;
  readonly url: string;
  readonly tags: string[];
  readonly description: string;
}

export async function getEvents(locale: string): Promise<readonly Event[]> {
  try {
    return await getFirst(
      () => getJSON(`_dynamic/events/${locale}.json`),
      () => getJSON(`_dynamic/events/${defaultLocale}.json`)
    );
  } catch (cause) {
    throw new Error("getEvents failed!", {
      cause,
    });
  }
}

export async function getEventByFilename(
  filename: string,
  locale: string
): Promise<Event> {
  try {
    return await getFirst(
      () => getMDXModule(`events/${locale}/${filename}.md`),
      () => getMDXModule(`events/${defaultLocale}/${filename}.md`)
    );
  } catch (cause) {
    throw new Error(`Event not found! ${filename}`, {
      cause,
    });
  }
}
