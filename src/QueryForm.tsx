import { Input } from "@chakra-ui/react";
import { ChangeEvent, HTMLProps } from "react";

const QueryForm = (props: {
    query: string;
    handleQuery: (e: ChangeEvent<HTMLInputElement>) => void
} & HTMLProps<HTMLFormElement>) => {
    const { query, handleQuery, ...restProps } = props
    return (
        <>
            <form {...restProps}>
                <Input
                    value={query}
                    onChange={handleQuery}
                />
            </form>
        </>
    );
}

export default QueryForm;