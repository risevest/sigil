import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_2403_5863)">
        <Path
          d="M2.255 0.844727L0.845001 2.25473L2.845 4.25473V20.1547H18.745L21.745 23.1547L23.155 21.7447L2.255 0.844727ZM6.845 18.1547H4.845V16.1547H6.845V18.1547ZM6.845 14.1547H4.845V12.1547H6.845V14.1547ZM4.845 10.1547V8.15473H6.845V10.1547H4.845ZM10.845 18.1547H8.845V16.1547H10.845V18.1547ZM8.845 14.1547V12.1547H10.845V14.1547H8.845ZM12.845 18.1547V16.1547H14.745L16.745 18.1547H12.845ZM8.845 4.15473H10.845V6.15473H10.395L12.845 8.60473V8.15473H20.845V16.6047L22.845 18.6047V6.15473H12.845V2.15473H6.395L8.845 4.60473V4.15473ZM16.845 10.1547H18.845V12.1547H16.845V10.1547Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2403_5863">
          <Rect width="24" height="24" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'DomainDisabled'

/**
 * Material Icon: Domain Disabled
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:domain_disabled Material Icon Docs}
 */
export const DomainDisabled = memo(Icon)
