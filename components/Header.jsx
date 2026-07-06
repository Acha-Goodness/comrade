import { View, Image } from 'react-native'
import { SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';

const Header = ({ title }) => {
    return (
        <View className="flex-row justify-between w-full items-center px-[4%] py-[3%] border-b border-[#ffffff]/20">
            <View>
                <Image
                    source={require("../assets/images/logo.png")}
                    className="w-20 h-20 pt-[20%]"
                />
            </View>
        </View>
    )
}

export default Header;