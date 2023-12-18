import {forwardRef} from 'react'
import {Box, Spinner} from '@chakra-ui/react'

export const FioraSpinner = () => (
    <Spinner size="xl" position="absolute" left="50%" top="50%" ml="calc(0px - var(--spinner-size) / 2)" mt="calc(0px - var(--spinner-size))" />
)

export const FioraContainer = forwardRef(({children}, ref) => (
    <Box ref={ref} className="fiora" m="auto" mt={['-20px', '-60px', '-10px']} mb={['-40px', '-140px', '-180px']} w={[280, 480, 640]} h={[280, 480, 640]} position="relative">
        {children}
    </Box>
))

FioraContainer.displayName = 'FioraContainer'

const Loader = () => {
    return(
        <FioraContainer>
            <FioraSpinner />
        </FioraContainer>
    )
}

export default Loader
