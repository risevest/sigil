import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M21.9 20.8902L3.52001 2.5102L2.10001 3.9202L6.30001 8.1202C5.30001 9.4302 4.70001 11.0602 4.70001 12.8202C4.71001 17.1802 8.29001 20.7002 12.71 20.7002C14.46 20.7002 16.07 20.1402 17.38 19.2002L20.48 22.3002L21.9 20.8902ZM12.71 18.7002C9.40001 18.7002 6.71001 16.0702 6.71001 12.8302C6.71001 11.6402 7.07001 10.5102 7.73001 9.5502L12.71 14.5302V18.7002ZM9.09001 5.2602L12.71 1.7002L18.36 7.2602C19.81 8.6902 20.71 10.6602 20.71 12.8302C20.71 14.0102 20.44 15.1202 19.97 16.1302L12.71 8.8702V4.5102L10.51 6.6702L9.09001 5.2602Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'InvertColorsOff'

/**
 * Material Icon: Invert Colors Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:invert_colors_off Material Icon Docs}
 */
export const InvertColorsOff = memo(Icon)
