import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.82656 5.82798C5.48307 6.17683 5.25614 6.66694 5.13143 7.59868C5.00237 8.56292 5.00027 9.84122 5.00027 11.68V12.32C5.00027 14.1561 5.00237 15.4331 5.13143 16.3974C5.25612 17.329 5.48316 17.8217 5.82824 18.1737C6.17709 18.5172 6.6672 18.7442 7.59893 18.8689C8.56317 18.9979 9.84147 19 11.6803 19H12.3203C14.1563 19 15.4334 18.9979 16.3976 18.8689C17.3292 18.7442 17.8219 18.5171 18.174 18.172C18.5175 17.8232 18.7444 17.3331 18.8691 16.4014C18.9982 15.4371 19.0003 14.1588 19.0003 12.32V11.68C19.0003 9.84394 18.9982 8.56694 18.8691 7.60268C18.7444 6.67106 18.5174 6.17837 18.1723 5.8263C17.8234 5.48281 17.3333 5.25589 16.4016 5.13118C15.4374 5.00213 14.1591 5.00002 12.3203 5.00002H11.6803C9.84419 5.00002 8.56718 5.00213 7.60293 5.13118C6.67132 5.25587 6.17864 5.48291 5.82656 5.82798ZM11.6803 3.00002H12.3203C13.7646 3.00002 15.2317 2.95676 16.6669 3.14886C17.8234 3.30365 18.8025 3.6354 19.584 4.40957L19.5924 4.4179C20.365 5.20154 20.6966 6.1807 20.8514 7.33736C21.0434 8.77133 21.0003 10.237 21.0003 11.68V12.32C21.0003 13.7644 21.0435 15.2314 20.8514 16.6667C20.6966 17.8232 20.3649 18.8022 19.5907 19.5838L19.5824 19.5922C18.7987 20.3648 17.8196 20.6964 16.6629 20.8512C15.229 21.0431 13.7633 21 12.3203 21H11.6803C10.2359 21 8.76887 21.0433 7.33361 20.8512C6.1771 20.6964 5.19807 20.3646 4.41652 19.5905L4.40811 19.5821C3.63551 18.7985 3.30392 17.8193 3.14911 16.6627C2.95718 15.2287 3.00027 13.7631 3.00027 12.32V11.68C3.00027 10.2357 2.957 8.76863 3.14911 7.33336C3.3039 6.17686 3.63564 5.19782 4.40982 4.41628L4.41814 4.40787C5.20179 3.63527 6.18094 3.30367 7.33761 3.14886C8.77157 2.95694 10.2372 3.00002 11.6803 3.00002ZM6.0364 8.47819C6.1324 13.1582 8.4724 15.9662 12.5764 15.9662H12.5824H12.8164V13.2902C14.3224 13.4402 15.4624 14.5442 15.9184 15.9662H18.0484C17.8299 15.1582 17.4426 14.4056 16.9121 13.7582C16.3815 13.1108 15.7198 12.5832 14.9704 12.2102C15.6419 11.8013 16.2218 11.2583 16.674 10.6151C17.1262 9.97195 17.4409 9.24245 17.5984 8.47219H15.6664C15.2464 9.96019 13.9984 11.3102 12.8164 11.4362V8.47819H10.8784V13.6622C9.6784 13.3622 8.1664 11.9102 8.1004 8.47819H6.0364Z" />
    </Svg>
  )
}

Icon.displayName = 'VkLine'

/**
 * Remix Icon: Vk Line
 * @see {@link https://remixicon.com/icon/vk-line Remix Icon Docs}
 */
export const VkLine = memo(Icon)
