import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_2403_5859)">
        <Path
          d="M1.915 0.844727L0.505005 2.25473L1.505 3.24473V15.1547C1.505 16.2547 2.395 17.1547 3.495 17.1547H10.505V19.1547H8.505V21.1547H16.505V19.1547H14.505V17.1547H15.405L21.405 23.1547L22.815 21.7447L1.915 0.844727ZM3.495 15.1547V5.24473L13.405 15.1547H3.495ZM5.05501 1.15473L7.05501 3.15473H21.505V15.1547H19.055L21.055 17.1547H21.495C22.595 17.1547 23.495 16.2547 23.495 15.1547V3.15473C23.495 2.05473 22.595 1.15473 21.495 1.15473H5.05501Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2403_5859">
          <Rect width="24" height="24" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'DesktopAccessDisabled'

/**
 * Material Icon: Desktop Access Disabled
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:desktop_access_disabled Material Icon Docs}
 */
export const DesktopAccessDisabled = memo(Icon)
