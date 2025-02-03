import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Mask, Path, Rect } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 25 24" fill={color} height={size} width={size} {...otherProps}>
      <Mask
        id="mask0_1009_49434"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="24"
      >
        <Rect x="0.890625" width="24" height="24" fill={color} />
      </Mask>
      <G mask="url(#mask0_1009_49434)">
        <Path
          d="M12.8906 22.0008C11.5073 22.0008 10.2073 21.7383 8.99062 21.2133C7.77396 20.6883 6.71563 19.9716 5.81562 19.0633C4.91562 18.1549 4.20312 17.0924 3.67813 15.8758C3.15312 14.6591 2.89062 13.3674 2.89062 12.0008C2.89062 9.38411 3.75729 7.13411 5.49063 5.25078C7.22396 3.36745 9.35729 2.30078 11.8906 2.05078V5.05078C10.174 5.28411 8.74479 6.05495 7.60313 7.36328C6.46146 8.67161 5.89062 10.2174 5.89062 12.0008C5.89062 13.9341 6.57396 15.5841 7.94063 16.9508C9.30729 18.3174 10.9573 19.0008 12.8906 19.0008C13.9906 19.0008 15.0198 18.7674 15.9781 18.3008C16.9365 17.8341 17.7406 17.2008 18.3906 16.4008L20.9906 17.9008C20.0906 19.1508 18.9323 20.1466 17.5156 20.8883C16.099 21.6299 14.5573 22.0008 12.8906 22.0008ZM22.0406 16.0508L19.4406 14.5508C19.5906 14.1508 19.7031 13.7383 19.7781 13.3133C19.8531 12.8883 19.8906 12.4508 19.8906 12.0008C19.8906 10.2174 19.3198 8.67161 18.1781 7.36328C17.0365 6.05495 15.6073 5.28411 13.8906 5.05078V2.05078C16.424 2.30078 18.5573 3.36745 20.2906 5.25078C22.024 7.13411 22.8906 9.38411 22.8906 12.0008C22.8906 12.7341 22.824 13.4424 22.6906 14.1258C22.5573 14.8091 22.3406 15.4508 22.0406 16.0508Z"
          fill={color}
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'DataUsage'

undefined
export const DataUsage = memo(Icon)
