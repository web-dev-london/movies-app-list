import { HStack } from "@chakra-ui/react"
import Clink from "clink-react"

const Navbar = () => {
    return (
        <>
            <HStack>
                <Clink
                    to={'/'}
                >
                    Home
                </Clink>
                <Clink
                    to={'/search'}
                >
                    Search
                </Clink>
            </HStack>
        </>
    )
}

export default Navbar