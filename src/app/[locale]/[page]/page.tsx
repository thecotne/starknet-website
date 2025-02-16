import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { getPageByFilename } from "src/data/pages";
import { PageContentContainer } from "../(components)/PageContentContainer";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  UnorderedList,
  OrderedList,
  ListItem,
  Flex,
  Box,
  Img,
} from "../../../libs/chakra-ui";
import { notFound } from "next/navigation";
import { getMessages } from "src/data/i18n/intl";
import { Sidebar } from "@ui/Layout/Sidebar";
import { SubNavLinkGroup } from "@ui/TableOfContents/TableOfContents";
import { PageLayout } from "@ui/Layout/PageLayout";

export interface Props {
  readonly params: LocaleParams & {
    readonly page: string;
  };
}

export default async function Page({
  params: { locale, page },
}: Props): Promise<JSX.Element> {
  try {
    const messages = await getMessages(locale);
    const { title, MDXContent } = await getPageByFilename(page, locale);

    return (
      <Box>
        <PageLayout
          breadcrumbs={
            <Breadcrumb separator="->">
              <BreadcrumbItem>
                <BreadcrumbLink fontSize="sm" href="#">
                  Parent
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink fontSize="sm" href="#">
                  {title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          }
          pageLastUpdated="Page last updated 21 Nov 2023"
          main={
            <Box>
              <MDXContent
                components={{
                  h2: (props) => (
                    <Heading
                      as="h2"
                      color="heading-navy-fg"
                      variant="h2"
                      {...props}
                    />
                  ),
                  h3: (props) => (
                    <Heading
                      color="heading-navy-fg"
                      pb={4}
                      as="h3"
                      variant="h3"
                      {...props}
                    />
                  ),
                  h4: (props) => (
                    <Heading
                      color="heading-navy-fg"
                      as="h4"
                      variant="h4"
                      {...props}
                    />
                  ),
                  h5: (props) => (
                    <Heading
                      color="heading-navy-fg"
                      as="h5"
                      variant="h4"
                      {...props}
                    />
                  ),
                  h6: (props) => (
                    <Heading
                      color="heading-navy-fg"
                      as="h6"
                      variant="h6"
                      {...props}
                    />
                  ),
                  p: (props) => (
                    <Text py={2} variant="baseRegular" {...props} />
                  ),
                  ul: (props) => <UnorderedList pl={1} {...props} />,
                  ol: (props) => <OrderedList pl={1} {...props} />,
                  li: (props) => <ListItem {...props} />,
                  img: (props) => <Img my="4" {...props} />,
                }}
              />
            </Box>
          }
          rightAside={
            <SubNavLinkGroup
              label="Table of contents"
              links={[
                {
                  label: "Page navigation item 1",
                  url: "https://www.google.com",
                },
                {
                  label: "Page navigation item 2",
                  url: "https://www.google.com",
                },
                {
                  label: "Page navigation item 3",
                  url: "https://www.google.com",
                },
                {
                  label: "Page navigation item 4",
                  url: "https://www.google.com",
                },
                {
                  label: "Page navigation item 5",
                  url: "https://www.google.com",
                },
                {
                  label: "Page navigation item 6",
                  url: "https://www.google.com",
                },
              ]}
            />
          }
        />
      </Box>
    );
  } catch (err) {
    console.log(err);
    notFound();
  }
}
