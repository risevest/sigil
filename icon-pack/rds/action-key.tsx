import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Mask, Path, Rect } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 25 24" fill={color} height={size} width={size} {...otherProps}>
      <Mask
        id="mask0_1009_49475"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="24"
      >
        <Rect x="0.890625" width="24" height="24" />
      </Mask>
      <G mask="url(#mask0_1009_49475)">
        <Path d="M22.4906 23L19.4156 19.95C19.1156 20.1333 18.7948 20.2708 18.4531 20.3625C18.1115 20.4542 17.7573 20.5 17.3906 20.5C16.2906 20.5 15.349 20.1083 14.5656 19.325C13.7823 18.5417 13.3906 17.6 13.3906 16.5C13.3906 15.4 13.7823 14.4583 14.5656 13.675C15.349 12.8917 16.2906 12.5 17.3906 12.5C18.4906 12.5 19.4323 12.8917 20.2156 13.675C20.999 14.4583 21.3906 15.4 21.3906 16.5C21.3906 16.8833 21.3406 17.2458 21.2406 17.5875C21.1406 17.9292 20.999 18.25 20.8156 18.55L23.8906 21.6L22.4906 23ZM6.39062 20.5C5.29063 20.5 4.34896 20.1083 3.56563 19.325C2.78229 18.5417 2.39062 17.6 2.39062 16.5C2.39062 15.4 2.78229 14.4583 3.56563 13.675C4.34896 12.8917 5.29063 12.5 6.39062 12.5C7.49062 12.5 8.43229 12.8917 9.21563 13.675C9.99896 14.4583 10.3906 15.4 10.3906 16.5C10.3906 17.6 9.99896 18.5417 9.21563 19.325C8.43229 20.1083 7.49062 20.5 6.39062 20.5ZM17.3906 18.5C17.9406 18.5 18.4115 18.3042 18.8031 17.9125C19.1948 17.5208 19.3906 17.05 19.3906 16.5C19.3906 15.95 19.1948 15.4792 18.8031 15.0875C18.4115 14.6958 17.9406 14.5 17.3906 14.5C16.8406 14.5 16.3698 14.6958 15.9781 15.0875C15.5865 15.4792 15.3906 15.95 15.3906 16.5C15.3906 17.05 15.5865 17.5208 15.9781 17.9125C16.3698 18.3042 16.8406 18.5 17.3906 18.5ZM6.39062 9.5C5.29063 9.5 4.34896 9.10833 3.56563 8.325C2.78229 7.54167 2.39062 6.6 2.39062 5.5C2.39062 4.4 2.78229 3.45833 3.56563 2.675C4.34896 1.89167 5.29063 1.5 6.39062 1.5C7.49062 1.5 8.43229 1.89167 9.21563 2.675C9.99896 3.45833 10.3906 4.4 10.3906 5.5C10.3906 6.6 9.99896 7.54167 9.21563 8.325C8.43229 9.10833 7.49062 9.5 6.39062 9.5ZM17.3906 9.5C16.2906 9.5 15.349 9.10833 14.5656 8.325C13.7823 7.54167 13.3906 6.6 13.3906 5.5C13.3906 4.4 13.7823 3.45833 14.5656 2.675C15.349 1.89167 16.2906 1.5 17.3906 1.5C18.4906 1.5 19.4323 1.89167 20.2156 2.675C20.999 3.45833 21.3906 4.4 21.3906 5.5C21.3906 6.6 20.999 7.54167 20.2156 8.325C19.4323 9.10833 18.4906 9.5 17.3906 9.5Z" />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ActionKey'

export const ActionKey = memo(Icon)
