import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1577)">
        <Path
          d="M20 40.0001C31.0457 40.0001 40 31.0458 40 20.0001C40 8.95443 31.0457 0.00012207 20 0.00012207C8.9543 0.00012207 0 8.95443 0 20.0001C0 31.0458 8.9543 40.0001 20 40.0001Z"
          fill={color}
        />
        <Path
          d="M39.8307 17.3914H22.6088H22.6087V0.169358C21.7548 0.058186 20.8841 6.10352e-05 20 6.10352e-05C19.1159 6.10352e-05 18.2452 0.058186 17.3913 0.169358V17.3912V17.3913H0.169297C0.058125 18.2453 0 19.1159 0 20.0001C0 20.8844 0.058125 21.7548 0.169297 22.6087H17.3912H17.3913V39.8308C18.2452 39.9419 19.1159 40.0001 20 40.0001C20.8841 40.0001 21.7548 39.942 22.6087 39.8308V22.6089V22.6088H39.8307C39.9419 21.7548 40 20.8844 40 20.0001C40 19.1159 39.9419 18.2453 39.8307 17.3914V17.3914Z"
          fill={color}
        />
        <Path
          d="M12.1735 9.56535V6.9566H9.5648V9.56535H6.95605V12.174H9.5648V14.7827H12.1735V12.174H14.7821V9.56535H12.1735Z"
          fill={color}
        />
        <Path
          d="M30.4351 9.56535V6.9566H27.8264V9.56535H25.2178V12.174H27.8264V14.7827H30.4351V12.174H33.0439V9.56535H30.4351Z"
          fill={color}
        />
        <Path
          d="M12.1735 27.8262V25.2175H9.5648V27.8262H6.95605V30.4349H9.5648V33.0436H12.1735V30.4349H14.7821V27.8262H12.1735Z"
          fill={color}
        />
        <Path
          d="M30.4351 27.8262V25.2175H27.8264V27.8262H25.2178V30.4349H27.8264V33.0436H30.4351V30.4349H33.0439V27.8262H30.4351Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1577">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Georgia'

/**
 * Flags by `Deji.Zeal`: Georgia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Georgia = memo(Icon)
