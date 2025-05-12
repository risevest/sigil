import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_2403_5905)">
        <Path
          d="M2.23001 0.820312L0.820007 2.23031L5.82001 7.22031C4.16001 7.22031 2.82001 8.56031 2.82001 10.2203V16.2203H6.82001V20.2203H18.82L21.77 23.1803L23.18 21.7703L2.23001 0.820312ZM6.82001 14.2203H4.82001V10.2203C4.82001 9.67031 5.27001 9.22031 5.82001 9.22031H7.82001L10.82 12.2203H6.82001V14.2203ZM8.82001 18.2203V14.2203H12.82L16.82 18.2203H8.82001ZM8.82001 4.22031H16.82V7.22031H11.48L13.48 9.22031H19.82C20.37 9.22031 20.82 9.67031 20.82 10.2203V14.2203L18.82 14.2303V12.2203H16.48L20.48 16.2203H22.82V10.2203C22.82 8.56031 21.48 7.22031 19.82 7.22031H18.82V2.22031H6.82001V2.58031L8.82001 4.58031V4.22031Z"
          fill={color}
        />
        <Path
          d="M18.82 11.7303C19.3723 11.7303 19.82 11.2826 19.82 10.7303C19.82 10.178 19.3723 9.73031 18.82 9.73031C18.2677 9.73031 17.82 10.178 17.82 10.7303C17.82 11.2826 18.2677 11.7303 18.82 11.7303Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2403_5905">
          <Rect width="24" height="24" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'PrintDisabled'

/**
 * Material Icon: Print Disabled
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:print_disabled Material Icon Docs}
 */
export const PrintDisabled = memo(Icon)
