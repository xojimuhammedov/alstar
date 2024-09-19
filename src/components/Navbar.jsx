import { Box, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import AlstarIcon from "@/assets/alstar.jpg";

function Navbar() {
  return (
    <Box {...css.nav}>
      <Box className="container">
        <Flex {...css.top}>
          <Link {...css.links} href="/about-alstar">
            About ALPOLIC™
          </Link>
          <Link {...css.links} href="/">
            Career
          </Link>
          <Link {...css.links} href="/contact">
            Contact
          </Link>
        </Flex>
        <Flex {...css.list}>
          <Link href="/">
            <Image {...css.icon} src={AlstarIcon.src} alt="AlstarIcon" />
          </Link>
          <Flex {...css.item}>
            <Link {...css.link} href="/">
              Why Alpolic
            </Link>
            <Link {...css.link} href="/">
              Products
            </Link>
            <Link {...css.link} href="/">
              Inspirations
            </Link>
            <Link {...css.link} href="/">
              Colours & Samples
            </Link>
            <Link {...css.link} href="/">
              Service & Downloads
            </Link>
            <Link {...css.link} href="/">
              News
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;

const css = {
  icon: {
    width: "180px",
  },
  nav: {
    padding: "24px 0",
  },
  list: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    alignItems: "center",
    gap: "24px",
  },
  link: {
    color: "#111",
    fontSize: "18px",
    lineHeight: "24px",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  top: {
    justifyContent: "flex-end",
    gap: "12px",
    padding: "16px 0",
  },
  links: {
    color: "#5F5E5E",
    fontSize: "14px",
    lineHeight: "20px",
    textTransform: "uppercase",
    fontWeight: "500",
  },
};
