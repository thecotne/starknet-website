import { defaultLocale } from "../i18n/config";
import { getFirst, getJSON } from "../utils";

export interface MainMenu {
  readonly items: MainMenuItem[];
}

export interface MainMenuItem {
  readonly title: string;
  readonly columns?: Column[];
}

export interface Column {
  readonly blocks?: Block[];
}

export interface Block {
  readonly title?: string;
  readonly items?: BlockItem[] | null;
}

export interface BlockItem {
  readonly custom_title?: string;
  readonly custom_icon?: string;
  readonly custom_internal_link?: string;
  readonly custom_external_link?: string;

  readonly page?: string;
  readonly page_title?: string;

  readonly post?: string;
  readonly post_title?: string;
}

export async function getMainMenu(locale: string): Promise<MainMenu> {
  try {
    return await getFirst(
      () => getJSON(`_dynamic/main-menu/${locale}.json`),
      () => getJSON(`_dynamic/main-menu/${defaultLocale}.json`),
    );
  } catch (cause) {
    throw new Error("getMainMenu failed!", {
      cause,
    });
  }
}
