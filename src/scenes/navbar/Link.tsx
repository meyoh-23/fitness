import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
}

function Link({
    page,
    selectedPage,
    setSelectedPage,
}: Props) {
    const lowercasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage; //remove spacing for more than one words
    return (
        <AnchorLink
        className={`${selectedPage === lowercasePage ? "text-primary-500": ""} transition duration-500 hover:tex-primary-300`}
        href={`#${lowercasePage}`}
        onClick={() => setSelectedPage(lowercasePage)}
        >
            {page}
        </AnchorLink>
    )
}

export default Link;