import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-center;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

img {
    transition: 200ms ease;
  }

&:hover img {
    transform: rotate(20deg);
}
`

const Logo = () => {
    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <motion.div
                        whileHover={{
                            position: 'relative',
                            zIndex: 1,
                            scale: 1.2,
                            transition: {
                                duration: 0.1
                            }
                        }}
                    >
                        <Image src={footPrintImg} width={20} height={20} alt="logo"/>
                    </motion.div>
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily="M PLUS Rounded 1c"
                        fontWeight="bold"
                        ml={3}
                    >
                        Caio Soares
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo