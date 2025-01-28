import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM18.671 12C18.65 11.425 18.2932 10.916 17.7598 10.7C17.2265 10.4841 16.6161 10.6016 16.201 11C15.0634 10.2267 13.7262 9.7995 12.351 9.77L13.001 6.65L15.141 7.1C15.1935 7.58851 15.5932 7.96647 16.0839 7.99172C16.5745 8.01696 17.0109 7.68201 17.1133 7.20147C17.2157 6.72094 16.9538 6.23719 16.4955 6.06019C16.0372 5.88318 15.5181 6.06536 15.271 6.49L12.821 6C12.74 5.98224 12.6554 5.99763 12.5858 6.04272C12.5163 6.08781 12.4678 6.15886 12.451 6.24L11.711 9.71C10.3189 9.73099 8.96325 10.1585 7.81098 10.94C7.38972 10.5436 6.77418 10.4333 6.2415 10.6588C5.70882 10.8842 5.35944 11.4028 5.35067 11.9812C5.3419 12.5595 5.67538 13.0885 6.20098 13.33C6.18972 13.4765 6.18972 13.6235 6.20098 13.77C6.20098 16.01 8.81098 17.83 12.031 17.83C15.251 17.83 17.861 16.01 17.861 13.77C17.8722 13.6235 17.8722 13.4765 17.861 13.33C18.3646 13.0797 18.6797 12.5623 18.671 12ZM8.67098 13C8.67098 12.4477 9.11869 12 9.67098 12C10.2233 12 10.671 12.4477 10.671 13C10.671 13.5523 10.2233 14 9.67098 14C9.40576 14 9.15141 13.8946 8.96387 13.7071C8.77633 13.5196 8.67098 13.2652 8.67098 13ZM14.481 15.75C13.7715 16.2847 12.8986 16.5568 12.011 16.52C11.1234 16.5568 10.2505 16.2847 9.54098 15.75C9.45288 15.6427 9.46057 15.486 9.55877 15.3878C9.65696 15.2896 9.81363 15.2819 9.92098 15.37C10.5222 15.811 11.2561 16.0333 12.001 16C12.7468 16.0406 13.4841 15.8254 14.091 15.39C14.1624 15.3203 14.2656 15.2941 14.3617 15.3211C14.4577 15.3482 14.5321 15.4244 14.5567 15.5211C14.5813 15.6178 14.5524 15.7203 14.481 15.79V15.75ZM14.301 14.04C13.7487 14.04 13.301 13.5923 13.301 13.04C13.301 12.4877 13.7487 12.04 14.301 12.04C14.8533 12.04 15.301 12.4877 15.301 13.04C15.312 13.3138 15.2101 13.5802 15.0192 13.7767C14.8282 13.9733 14.565 14.083 14.291 14.08L14.301 14.04Z" />
    </Svg>
  )
}

Icon.displayName = 'RedditFill'

/**
 * Remix Icon: Reddit Fill
 * @see {@link https://remixicon.com/icon/reddit-fill Remix Icon Docs}
 */
export const RedditFill = memo(Icon)
