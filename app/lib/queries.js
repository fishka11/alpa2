export const getLayoutsSEO = `query layoutsSEO {
  layoutsSEO(first: 100) {
    seo {
      id
      title
      description
      keywords
    }
    name
    id
  }
}`;

export const getHeaderContent = `query headerContent {
  marketingPages(first: 100) {
    id
    menuLink {
      display
      id
      menu
      positionInMenu
      slug
      visibleInMenu
    }
  }
}`;

export const getPortfolio = (tag) => `query portfolioPics {
  assets(first: 1000, where: {tags_contains_some: ${tag}}, orderBy: publishedAt_DESC) {
    fileName
    height
    id
    size
    url
    width
    tags
    handle
  }
}
`;

export const getPolishTagNames = `query getPolishTagNames {
  tags {
    id
    polishTag
    englishTag
  }
}`;

export const getMarketingPagesContent = (slug) => `query marketingPagesContent {
  marketingPages(where: {menuLink: {slug: ${
    slug === "/" ? null : `"${slug}"`
  }}}) {
    ctaButtons {
      id
      text
      url
    }
    header {
      id
      picture {
        fileName
        handle
        height
        mimeType
        id
        size
        url
        width
      }
      smallPicture {
        fileName
        handle
        height
        mimeType
        id
        size
        url
        width
      }
      texts {
        subtitle
        id
        text {
          html
          markdown
          raw
          text
        }
      }
      slogans
      verticalPosition
      ctaButtons {
        url
        text
        id
      }
    }
    id
    markdownTexts {
      markdownText
      id
    }
    seo {
      title
      keywords
      id
      description
    }
    texts {
      id
      subtitle
      text {
        html
        markdown
        raw
        text
      }
    }
    title
    subtitle
    bgPictures {
      id
      picture {
        fileName
        id
        height
        handle
        mimeType
        size
        url
        width
      }
      verticalPosition
    }
    cardsWithIcon {
      fontAwesomeIconName
      id
      subtitle
      texts {
        subtitle
        text {
          html
          markdown
          raw
          text
        }
      }
    }
    cardsWithPic {
      id
      subtitle
      texts {
        subtitle
        text {
          html
          markdown
          raw
          text
        }
        id
      }
      picture {
        fileName
        handle
        height
        id
        mimeType
        size
        width
        url
      }
    }
    menuLink {
      display
      id
      menu
      positionInMenu
      slug
      visibleInMenu
    }
    metamorphoses {
      title
      texts {
        subtitle
        id
        text {
          html
          markdown
          raw
          text
        }
      }
      markdownTexts {
        markdownText
        id
      }
      after {
        fileName
        handle
        height
        id
        mimeType
        size
        tags
        url
        width
      }
      before {
        fileName
        handle
        height
        id
        mimeType
        size
        tags
        url
        width
      }
      beforeAfter {
        fileName
        handle
        height
        id
        mimeType
        size
        tags
        url
        width
      }
    }
  }
}`;
