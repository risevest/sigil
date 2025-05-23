import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Mask, Path, Rect } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 25 25" fill="none" height={size} width={size} {...otherProps}>
      <Mask
        id="mask0_1009_42127"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="25"
      >
        <Rect x="0.890625" y="0.5" width="24" height="24" fill={color} />
      </Mask>
      <G mask="url(#mask0_1009_42127)">
        <Path
          d="M13.1656 19.5C13.3656 19.4833 13.5365 19.4042 13.6781 19.2625C13.8198 19.1208 13.8906 18.95 13.8906 18.75C13.8906 18.5167 13.8156 18.3292 13.6656 18.1875C13.5156 18.0458 13.324 17.9833 13.0906 18C12.4073 18.05 11.6823 17.8625 10.9156 17.4375C10.149 17.0125 9.66563 16.2417 9.46563 15.125C9.43229 14.9417 9.34479 14.7917 9.20312 14.675C9.06146 14.5583 8.89896 14.5 8.71563 14.5C8.48229 14.5 8.29063 14.5875 8.14062 14.7625C7.99062 14.9375 7.94063 15.1417 7.99063 15.375C8.27396 16.8917 8.94062 17.975 9.99062 18.625C11.0406 19.275 12.099 19.5667 13.1656 19.5ZM12.8906 22.5C10.6073 22.5 8.70312 21.7167 7.17813 20.15C5.65313 18.5833 4.89062 16.6333 4.89062 14.3C4.89062 12.6333 5.55313 10.8208 6.87813 8.8625C8.20312 6.90417 10.2073 4.78333 12.8906 2.5C15.574 4.78333 17.5781 6.90417 18.9031 8.8625C20.2281 10.8208 20.8906 12.6333 20.8906 14.3C20.8906 16.6333 20.1281 18.5833 18.6031 20.15C17.0781 21.7167 15.174 22.5 12.8906 22.5Z"
          fill={color}
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'WaterDrop'

export const WaterDrop = memo(Icon)
