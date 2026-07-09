import { View, Text, TouchableOpacity, Image, FlatList, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Octicons, MaterialIcons } from '@expo/vector-icons';
import bob from "@/assets/images/bob.png";
import { useIsFocused } from '@react-navigation/native';

const Campus = () => {
    const isFocused = useIsFocused();
    const academic = [
        { id: 1, text: 'Timetable', icon: 'calendar-month', iconColor: "#00b106ff", bgColor: "#d0ffe0ff" },
        { id: 2, text: 'Assignment', icon: 'assignment', iconColor: "#003dadff", bgColor: "#d2e7ffff" },
        { id: 3, text: 'Events', icon: 'event-seat', iconColor: "#700098ff", bgColor: "#ffe4f1ff" },
        { id: 4, text: 'Results', icon: 'scoreboard', iconColor: "#df0000ff", bgColor: "#ffe1e1ff" },
        { id: 5, text: 'Attendance', icon: 'app-registration', iconColor: "#ff00aeff", bgColor: "#ffd5f2ff" },
        { id: 6, text: 'Coursemate', icon: 'groups', iconColor: "#e0af00ff", bgColor: "#fff5d3ff" }
    ]

    const campus = [
        { id: 1, text: 'Clubs', icon: 'assignment', iconColor: "#ffffffff", bgColor: "#000000ff" },
        { id: 3, text: 'Campus Map', icon: 'add-location-alt', iconColor: "#ffffff", bgColor: "#000000ff" },
        { id: 4, text: 'Emergency', icon: 'phone-in-talk', iconColor: "#ffffff", bgColor: "#000000ff" },
    ]

    const services = [
        { id: 1, text: 'Library', sub: "Search book & resources", icon: 'local-library', iconColor: "#000000", bgColor: "#ffffff" },
        { id: 3, text: 'Hostel', sub: "Info & Complaints", icon: 'business', iconColor: "#000000", bgColor: "#ffffff" },
        { id: 4, text: 'Transport', sub: "Routes & Schedules", icon: 'directions-bus', iconColor: "#000000", bgColor: "#ffffff" },
    ]

    useEffect(() => {
        if (isFocused) {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#121212'); // Android only
        }
    }, [isFocused]);

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView className="flex-1 bg-white p-[20%]">
                <View className="flex-1">
                    <View className="flex-row items-center justify-between">
                        <View></View>
                        <View className="flex-row items-center justify-between gap-2">
                            <Text className="text-[20px] font-poppins text-[#000]">Campus</Text>
                        </View>
                        <View className="p-[3%] rounded-[50px]">
                            <View className="bg-[#0452df] rounded-full w-5 h-5 flex items-center justify-center absolute top-1 right-2.5 z-10">
                                <Text className="text-[10px] text-white font-[500] font-inter">0</Text>
                            </View>
                            <Octicons name="bell-fill" size={25} color="#000000" />
                        </View>
                    </View>
                    <View className="flex-row bg-[#000000ff] px-5 rounded-[10px]">
                        <View className="w-[50%] justify-center">
                            <Text className="text-[15px] font-[500] font-inter font-semibold text-[#FFF]">Study on top of your campus life</Text>
                        </View>
                        <View className="w-[100%] flex-1 justify-center">
                            <Image
                                source={bob}
                                className="w-[100%] h-[10vh]"
                                resizeMode="contain"
                            />
                        </View>
                    </View>

                    <View className="mt-[2%]">
                        <View className="">
                            <Text className="text-[16px] leading-tight font-[600]">Academics</Text>
                        </View>
                        <View className="mt-2">
                            <FlatList
                                data={academic}
                                numColumns={3}
                                showsHorizontalScrollIndicator={false}
                                // contentContainerStyle={{ gap: 30, margin: "auto", width: "90%" }}
                                columnWrapperStyle={{
                                    justifyContent: "space-evenly",
                                    marginBottom: 10,
                                }}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item }) => (
                                    <View
                                        className={`w-[100px] py-5 rounded-[5px] items-center`}
                                        style={{ backgroundColor: item.bgColor }}
                                    >
                                        <MaterialIcons name={item.icon} size={30} color={item.iconColor} />
                                        <Text className="text-[10px] text-[#000] font-poppins-medium mt-2">{item.text}</Text>
                                    </View>
                                )}
                            />
                        </View>
                    </View>

                    <View className="mt-[1%]">
                        <View className="">
                            <Text className="text-[16px] leading-tight font-[600]">Campus Life</Text>
                        </View>
                        <View className="mt-2">
                            <FlatList
                                data={campus}
                                numColumns={3}
                                showsHorizontalScrollIndicator={false}
                                // contentContainerStyle={{ gap: 30, margin: "auto", width: "90%" }}
                                columnWrapperStyle={{
                                    justifyContent: "space-evenly",
                                    marginBottom: 10,
                                }}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item }) => (
                                    <View
                                        className={`w-[100px] py-5 rounded-[5px] items-center`}
                                        style={{ backgroundColor: item.bgColor }}
                                    >
                                        <MaterialIcons name={item.icon} size={30} color={item.iconColor} />
                                        <Text className="text-[10px] text-[#fff] font-poppins-medium mt-2">{item.text}</Text>
                                    </View>
                                )}
                            />
                        </View>
                    </View>

                    <View className="mt-[1%]">
                        <View className="">
                            <Text className="text-[16px] leading-tight font-[600]">Services</Text>
                        </View>
                        <View className="">
                            <FlatList
                                data={services}
                                vertical
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ margin: "auto", width: "90%" }}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item }) => (
                                    <View className={`w-[100px] justify-between flex-row w-full mt-2 py-4 px-2 rounded-[5px] border border-1 border-[#c3c3c3ff] items-center`}>
                                        <View className='flex-row items-center w-[70%]'>
                                            <MaterialIcons name={item.icon} size={30} color="#000000" />
                                            <View className="ml-2">
                                                <Text className="text-[14px] text-[#000000] font-poppins-medium">{item.text}</Text>
                                                <Text className="text-[10px] text-[#868686ff] font-poppins-medium">{item.sub}</Text>
                                            </View>
                                        </View>
                                        <MaterialIcons name="chevron-right" size={20} color="#000000" />
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Campus;