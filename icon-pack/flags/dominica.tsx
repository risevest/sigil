import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1728)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M23.9131 39.6161C31.8196 38.0477 38.0478 31.8194 39.6162 23.913H23.9131V39.6161Z"
          fill="#496E2D"
        />
        <Path
          d="M0.383789 23.913C1.95215 31.8194 8.18043 38.0477 16.0869 39.6161V23.913H0.383789Z"
          fill="#496E2D"
        />
        <Path
          d="M39.6162 16.0869C38.0478 8.18051 31.8196 1.95223 23.9131 0.383789V16.0869H39.6162Z"
          fill="#496E2D"
        />
        <Path
          d="M16.0869 0.383789C8.18043 1.95223 1.95215 8.18051 0.383789 16.0869H16.0869V0.383789Z"
          fill="#496E2D"
        />
        <Path
          d="M18.6956 23.913H16.0869V39.6161C16.9382 39.7849 17.8091 39.8993 18.6956 39.9564V23.913Z"
          fill="#FFDA44"
        />
        <Path
          d="M18.6956 16.0869V0.043457C17.8091 0.100488 16.9382 0.214941 16.0869 0.383769V16.0869H18.6956Z"
          fill="#FFDA44"
        />
        <Path
          d="M21.3041 0.0435156C20.8727 0.015625 20.438 0 19.9997 0C19.5613 0 19.1267 0.015625 18.6953 0.0435156V16.087H21.304V0.0435156H21.3041Z"
          fill="black"
        />
        <Path
          d="M18.6953 39.9564C19.1267 39.9843 19.5613 39.9999 19.9997 39.9999C20.438 39.9999 20.8727 39.9843 21.3041 39.9564V23.913H18.6954V39.9564H18.6953Z"
          fill="black"
        />
        <Path
          d="M16.0874 18.6956V16.0869H0.384258C0.215352 16.9383 0.100977 17.8091 0.0439453 18.6956H16.0874Z"
          fill="#FFDA44"
        />
        <Path
          d="M23.9131 18.6956H39.9566C39.8996 17.8091 39.7851 16.9383 39.6163 16.0869H23.9132V18.6956H23.9131Z"
          fill="#FFDA44"
        />
        <Path
          d="M23.9131 21.3043H39.9566C39.9844 20.873 40 20.4383 40 19.9999C40 19.5616 39.9844 19.1269 39.9565 18.6956H23.9131V21.3043Z"
          fill="black"
        />
        <Path
          d="M0.0435156 18.6956C0.0157031 19.1269 0 19.5616 0 19.9999C0 20.4383 0.0157031 20.873 0.0435156 21.3043H16.087V18.6956H0.0435156V18.6956Z"
          fill="black"
        />
        <Path
          d="M19.9998 29.5652C25.2825 29.5652 29.565 25.2827 29.565 19.9999C29.565 14.7172 25.2825 10.4347 19.9998 10.4347C14.7171 10.4347 10.4346 14.7172 10.4346 19.9999C10.4346 25.2827 14.7171 29.5652 19.9998 29.5652Z"
          fill="#D80027"
        />
        <Path
          d="M22.1789 21.0672C21.4674 19.6443 20.5426 18.2021 20.5426 18.2021C20.5426 18.2021 20.5656 17.5455 20.5656 17.1542C20.5656 16.5648 20.0878 16.087 19.4984 16.087C18.94 16.087 18.4825 16.516 18.4359 17.0622C17.9968 17.0909 17.6494 17.4551 17.6494 17.9013C17.6494 18.2258 17.8332 18.507 18.1023 18.6475C18.2361 18.3347 18.4979 18.0905 18.8218 17.9791C18.8746 18.0223 18.9314 18.0609 18.9919 18.0937L19.1286 18.1591C19.1286 18.1591 18.6217 19.5881 18.6217 20.3558C18.6217 22.5139 20.0446 23.1795 20.0446 23.1795V23.2017L19.3332 23.9131H20.7561V22.4902L21.4675 23.2016C21.4738 23.1883 22.8152 22.3399 22.1789 21.0672V21.0672Z"
          fill="#496E2D"
        />
        <Path
          d="M19.9993 12.174L20.3231 13.1704H21.3707L20.5232 13.7862L20.847 14.7826L19.9993 14.1668L19.1517 14.7826L19.4755 13.7862L18.6279 13.1704H19.6756L19.9993 12.174Z"
          fill="#496E2D"
        />
        <Path
          d="M15.3999 13.6687L16.2474 14.2845L17.095 13.6686L16.7713 14.6651L17.6189 15.2808L16.5712 15.2809L16.2475 16.2773L15.9236 15.2809L14.876 15.2808L15.7236 14.665L15.3999 13.6687Z"
          fill="#496E2D"
        />
        <Path
          d="M12.5566 17.5817H13.6042L13.928 16.5853L14.2518 17.5817L15.2995 17.5817L14.452 18.1976L14.7758 19.194L13.928 18.5781L13.0805 19.1939L13.4041 18.1975L12.5566 17.5817Z"
          fill="#496E2D"
        />
        <Path
          d="M12.5566 22.4183L13.4041 21.8026L13.0804 20.8062L13.928 21.422L14.7757 20.8062L14.452 21.8026L15.2996 22.4184L14.2518 22.4185L13.928 23.4148L13.6042 22.4183H12.5566Z"
          fill="#496E2D"
        />
        <Path
          d="M15.4 26.3315L15.7236 25.3352L14.876 24.7194H15.9237L16.2475 23.7229L16.5713 24.7193H17.619L16.7714 25.3352L17.0951 26.3316L16.2475 25.7157L15.4 26.3315Z"
          fill="#496E2D"
        />
        <Path
          d="M19.9993 27.8262L19.6756 26.83H18.6279L19.4755 26.214L19.1517 25.2176L19.9993 25.8333L20.8469 25.2175L20.5232 26.214L21.3707 26.8299L20.3231 26.83L19.9993 27.8262Z"
          fill="#496E2D"
        />
        <Path
          d="M24.5999 26.3315L23.7524 25.7157L22.9048 26.3317L23.2285 25.3352L22.3809 24.7194L23.4286 24.7193L23.7523 23.7229L24.0762 24.7194H25.1238L24.2762 25.3352L24.5999 26.3315Z"
          fill="#496E2D"
        />
        <Path
          d="M27.4432 22.4184H26.3956L26.0718 23.4149L25.748 22.4185H24.7002L25.5479 21.8026L25.224 20.8063L26.0718 21.4221L26.9193 20.8063L26.5957 21.8027L27.4432 22.4184Z"
          fill="#496E2D"
        />
        <Path
          d="M27.4432 17.5817L26.5957 18.1974L26.9193 19.1938L26.0718 18.5781L25.2241 19.194L25.5479 18.1975L24.7002 17.5817L25.748 17.5816L26.0717 16.5853L26.3956 17.5817H27.4432Z"
          fill="#496E2D"
        />
        <Path
          d="M24.5999 13.6686L24.2762 14.6649L25.1238 15.2808H24.0762L23.7524 16.2772L23.4286 15.2808L22.3809 15.2809L23.2285 14.6649L22.9048 13.6687L23.7524 14.2844L24.5999 13.6686Z"
          fill="#496E2D"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1728">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Dominica'

/**
 * Flags by `Deji.Zeal`: Dominica
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Dominica = memo(Icon)
