import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1404)">
        <Path
          d="M20 40.0002C31.0457 40.0002 40 31.0459 40 20.0002C40 8.95455 31.0457 0.000244141 20 0.000244141C8.9543 0.000244141 0 8.95455 0 20.0002C0 31.0459 8.9543 40.0002 20 40.0002Z"
          fill={color}
        />
        <Path
          d="M26.4962 14.7825H23.8795C23.9012 15.0701 23.9134 15.3603 23.9134 15.6521C23.9134 17.5868 23.4298 19.462 22.5868 20.7968C22.3267 21.2086 21.8897 21.79 21.3047 22.1822V14.7825H18.696V22.1822C18.1111 21.79 17.674 21.2086 17.4139 20.7968C16.5708 19.462 16.0873 17.5868 16.0873 15.6521C16.0873 15.3603 16.0996 15.07 16.1212 14.7825H13.5045C13.4877 15.0687 13.4785 15.3586 13.4785 15.6521C13.4785 21.0158 16.3432 25.2173 20.0002 25.2173C23.6573 25.2173 26.5219 21.0158 26.5219 15.6521C26.5221 15.3586 26.513 15.0687 26.4962 14.7825V14.7825Z"
          fill={color}
        />
        <Path
          d="M8.2607 9.56523H10.8694V11.3044H13.478V9.56523H16.0867V11.3044H18.6954V9.56523H21.3041V11.3044H23.9127V9.56523H26.5214V11.3044H29.1301V9.56523H31.7388V11.3044H38.0151C34.7803 4.61445 27.929 0 19.9998 0C12.0707 0 5.21938 4.61445 1.98438 11.3044H8.2607V9.56523Z"
          fill={color}
        />
        <Path
          d="M31.739 28.6958V30.4349H29.1303V28.6958H26.5216V30.4349H23.913V28.6958H21.3043V30.4349H18.6956V28.6958H16.087V30.4349H13.4783V28.6958H10.8694V30.4349H8.2607V28.6958H1.98438C5.21938 35.3857 12.0706 40.0002 19.9998 40.0002C27.9291 40.0002 34.7803 35.3857 38.0153 28.6958H31.739Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1404">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Iran'

/**
 * Flags by Deji.Zeal: Iran
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Iran = memo(Icon)
