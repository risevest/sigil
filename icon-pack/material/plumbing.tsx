import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.2788 4.92961L17.1588 2.80961C16.3788 2.02961 15.1088 2.02961 14.3288 2.80961L11.4988 5.63961L13.6187 7.75961L15.7388 5.63961L19.2788 9.17961C20.4488 7.99961 20.4488 6.09961 19.2788 4.92961Z" />
      <Path d="M5.48875 13.7696C6.07875 14.3596 7.02875 14.3596 7.60875 13.7696L10.0788 11.2996L7.95875 9.16961L5.48875 11.6396C4.89875 12.2296 4.89875 13.1796 5.48875 13.7696Z" />
      <Path d="M15.0387 7.75961L13.6187 9.17961L10.4387 5.99961C9.84875 5.39961 8.89875 5.39961 8.31875 5.98961C7.72875 6.57961 7.72875 7.52961 8.31875 8.10961L11.4988 11.2896L4.42875 18.3596C3.64875 19.1396 3.64875 20.4096 4.42875 21.1896C5.20875 21.9696 6.47875 21.9696 7.25875 21.1896L16.4488 11.9996C16.8388 12.3896 17.4688 12.3896 17.8588 11.9996C18.2488 11.6096 18.2488 10.9796 17.8588 10.5896L15.0387 7.75961Z" />
    </Svg>
  )
}

Icon.displayName = 'Plumbing'

/**
 * Material Icon: Plumbing
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:plumbing Material Icon Docs}
 */
export const Plumbing = memo(Icon)
