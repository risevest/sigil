import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM10.915 11.5684C11.1559 10.7273 11.9899 10.0266 12.9053 9.9202C13.092 10.6139 13.2926 11.2934 13.4503 11.9826C13.503 12.2127 13.4869 12.4776 13.4317 12.7098C13.2195 13.6019 12.1844 13.9521 11.4543 13.3949C10.9232 12.9896 10.7125 12.2757 10.915 11.5684ZM14.7323 11.3707C14.6071 10.9065 14.476 10.4438 14.3394 9.95097C14.8388 10.081 15.2465 10.3108 15.594 10.6485C16.8506 11.87 16.9793 13.9488 15.888 15.3804C14.7526 16.8698 12.7331 17.5141 10.8596 16.9848C8.55798 16.3345 7.05207 14.0327 7.41861 11.6692C7.69287 9.90076 8.68938 8.66514 10.3187 7.93582C10.7257 7.75367 10.8985 7.37612 10.739 7.0063C10.5818 6.64172 10.1984 6.50242 9.79548 6.66349C7.07384 7.7515 5.47405 10.7974 6.12578 13.6503C6.83792 16.7679 9.61963 18.8125 12.7995 18.5089C14.5318 18.3435 15.9636 17.5609 17.0156 16.1624C18.5218 14.1599 18.3131 11.3794 16.5534 9.66325C15.8867 9.01311 15.0816 8.64501 14.1638 8.50972C14.08 8.49736 13.9463 8.45787 13.9314 8.40426C13.8437 8.09092 13.7506 7.77237 13.7249 7.45035C13.6963 7.09273 14.0143 6.80938 14.3753 6.80488C14.6282 6.80173 14.8087 6.93579 14.9784 7.10468C15.2805 7.40513 15.6824 7.42674 15.9662 7.16733C16.2551 6.90322 16.2624 6.48912 15.984 6.15892C15.4178 5.48746 14.3978 5.26779 13.5545 5.63572C12.7067 6.00566 12.233 6.82256 12.3546 7.72916C12.3922 8.00993 12.4639 8.28616 12.5213 8.57131C12.4302 8.59639 12.3452 8.61951 12.2605 8.64317C11.4048 8.88224 10.6999 9.34675 10.1634 10.0575C9.24196 11.2778 9.22657 12.8846 10.1219 14.0044C11.3962 15.5982 13.8687 15.2882 14.6453 13.4357C14.9287 12.7595 14.9201 12.0676 14.7323 11.3707Z" />
    </Svg>
  )
}

Icon.displayName = 'NeteaseCloudMusicFill'

/**
 * Remix Icon: Netease Cloud Music Fill
 * @see {@link https://remixicon.com/icon/netease-cloud-music-fill Remix Icon Docs}
 */
export const NeteaseCloudMusicFill = memo(Icon)
