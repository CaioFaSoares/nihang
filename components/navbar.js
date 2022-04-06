import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    HStack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    Text
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub, IoLogoBehance, IoLogoLinkedin } from 'react-icons/io5'

const LinkItem = ({ href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href} passHref>
            <Link
                p={2}
                bg={active ? 'orange' : undefined}
                color={active ? '#202023' : inactiveColor}
        >
            {children}
            </Link>
        </NextLink>
    )
}

const Contact = ({path}) => { 
    return (
        <LinkItem href="/contact" path={path} >
            <Text>
                Contact
            </Text>
        </LinkItem>
    )
}

const NoContact = () => { 
    return (
        <Text
            style={{ textDecorationLine: 'line-through' }}
            p={2}
        >
            Contact
        </Text>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
        position='fixed'
        as='nav'
        w='100%'
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter:'blur(10px'}}
        zIndex={1}
        {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <HStack
                    direction={{base:'column', md:'row'}}
                    display={{base:'none', md:'flex'}}
                    width={{base:'full', md:'auto'}}
                    alignItems='center'
                    flexGrow={1}
                    mt={{base: 4, md: 0}}
                    // ms={2}
                >
                    <LinkItem href="/works" path={path}>
                    Works
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                    Posts
                    </LinkItem>
                    <LinkItem href="/skills" path={path}>
                    Skills
                    </LinkItem>
                    <Contact />
                    <LinkItem
                        target="_blank"
                        href="https://github.com/CaioFaSoares"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        <IoLogoGithub/>
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://www.behance.net/caiosoares1"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        <IoLogoBehance />
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://www.linkedin.com/in/caio-soares-3153341a1/"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        <IoLogoLinkedin />
                    </LinkItem>
                </HStack>
                <Box flex={1} align='right'>
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"/>
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>
                                        About
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>
                                        Works
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/posts" passHref>
                                    <MenuItem as={Link}>
                                        Posts
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/skills" passHref>
                                    <MenuItem as={Link}>
                                        Skills
                                    </MenuItem>
                                </NextLink>
                                <MenuItem as={Link} href="https://github.com/CaioFaSoares">
                                        Github
                                </MenuItem>
                                <MenuItem as={Link} href="https://www.behance.net/caiosoares1">
                                        Behance
                                </MenuItem>
                                <MenuItem as={Link} href="https://www.linkedin.com/in/caio-soares-3153341a1/">
                                        Linkedin
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
        
    )
}

export default Navbar