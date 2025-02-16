import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON, getMDXModule } from "./utils";

interface Topic {
  readonly name: string;
  readonly type: string;
  readonly website_url: string;
  readonly image: string;
  readonly company_name: string;
  readonly twitter: string;
  readonly description: string;
}

export async function getBlockExplorers(
  locale: string
): Promise<readonly Topic[]> {
  try {
    return await getFirst(
      () => getJSON(`_dynamic/block_explorers/${locale}.json`),
      () => getJSON(`_dynamic/block_explorers/${defaultLocale}.json`)
    );
  } catch (cause) {
    throw new Error("getBlockExplorers failed!", {
      cause,
    });
  }
}

export async function getBlockExplorerByFilename(
  filename: string,
  locale: string
): Promise<Topic> {
  try {
    return await getFirst(
      () => getMDXModule(`block_explorers/${locale}/${filename}.md`),
      () => getMDXModule(`block_explorers/${defaultLocale}/${filename}.md`)
    );
  } catch (cause) {
    throw new Error(`BlockExplorer not found! ${filename}`, {
      cause,
    });
  }
}
