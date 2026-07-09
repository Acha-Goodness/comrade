import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Octicons, MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import group from "@/assets/images/group.png";
import dataImg from "@/assets/images/data.jpeg";
import { useIsFocused } from '@react-navigation/native';

const Dashboard = () => {
    const router = useRouter();
    const isFocused = useIsFocused();

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
                <View>
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center justify-between gap-2">
                            <MaterialCommunityIcons name="account-school" size={40} color="#000000" />
                            <Text className="text-[20px] font-[500] font-poppins text-[#000]">Hi, Henry</Text>
                        </View>
                        <View className="p-[3%] rounded-[50px]">
                            <View className="bg-[#0452df] rounded-full w-5 h-5 flex items-center justify-center absolute top-1 right-2.5 z-10">
                                <Text className="text-[10px] text-white font-[500] font-inter">0</Text>
                            </View>
                            <Octicons name="bell-fill" size={25} color="#000000" />
                        </View>
                    </View>
                    <View className="mt-[3%]">
                        <TextInput
                            placeholder="Search"
                            className="w-[100%] py-4 px-3 rounded-[10px] border border-2 border-[#F0F0F0]"
                            id="search"
                            type="text"
                            autoCapitalize="none"
                            placeholderTextColor="#777"
                        />
                    </View>
                    <View className="flex-row mt-[3%] bg-[#000000] p-5 rounded-[10px]">
                        <View className="w-[50%] justify-center">
                            <Text className="text-[15px] font-[500] font-inter font-semibold text-[#FFF]">Build Together</Text>
                            <Text className="text-[15px] font-[500] font-inter font-semibold text-[#FFF]">Succeed Together</Text>
                            <Text className="text-[11px] font-[500] font-inter text-[#FFF] w-[70%] mt-3">Join study groups and achieve your goals</Text>
                            <TouchableOpacity className="bg-white py-[10px] rounded-[5px] mt-4 w-[60%]">
                                <Text className="text-[12px] font-[500] text-center font-inter text-[#000000]">Explore Groups</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="w-[100%] flex-1 justify-center">
                            <Image
                                source={group}
                                className="w-[100%] h-[15vh]"
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                    <View className="mt-[5%]">
                        <View className="">
                            <Text className="text-[16px] leading-tight font-[600]">Quick Action</Text>
                        </View>
                        <View className="mt-4">
                            <FlatList
                                data={[
                                    { id: 1, text: 'sell an item', icon: 'shopping-basket', iconColor: "#00b106ff", bgColor: "#d0ffe0ff" },
                                    { id: 2, text: 'Study Groups', icon: 'diversity-3', iconColor: "#003dadff", bgColor: "#d2e7ffff" },
                                    { id: 3, text: 'Lost & Found', icon: 'manage-search', iconColor: "#700098ff", bgColor: "#ffe4f1ff" },
                                    { id: 4, text: 'Report Issue', icon: 'report', iconColor: "#df0000ff", bgColor: "#ffe1e1ff" },
                                ]}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ gap: 30, margin: "auto", width: "90%" }}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item }) => (
                                    <View>
                                        <View
                                            className={`p-5 rounded-[5px] items-center`}
                                            style={{ backgroundColor: item.bgColor }}
                                        >
                                            <MaterialIcons name={item.icon} size={24} color={item.iconColor} />
                                        </View>
                                        <Text className="text-[10px] text-[#000] font-poppins-medium mt-2">{item.text}</Text>
                                    </View>
                                )}
                            />
                        </View>
                    </View>

                    <View className="mt-[5%] mb-[3%]">
                        <View className="flex-row justify-between items-center">
                            <Text className="text-[18px] font-[600] text-[#000]">Today's Classes</Text>
                            <Text className="text-[12px] font-[500] font-inter text-[#0452df] font-semibold">View Timetable</Text>
                        </View>
                    </View>

                    <FlatList
                        data={[
                            { id: 1, text: 'Data Structures & Algorithms', time: '08:00 AM - 10:00 AM', venue: 'Room 204, CS Building', lecturer: 'Dr. Smith', icon: 'stacked-bar-chart', iconColor: "#a200c7ff", bgColor: "#e8d0f8ff" },
                            { id: 2, text: 'Python Programming', time: '08:00 AM - 10:00 AM', venue: 'Room 302, Design Block', lecturer: 'Dr. Smith', icon: 'code', iconColor: "#ad4e00ff", bgColor: "#ffdabeff" },
                        ]}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ gap: 16, paddingBottom: 15 }}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <View className="flex-row items-center gap-2">
                                <View
                                    className="p-5 rounded-[5px] items-center"
                                    style={{ backgroundColor: item.bgColor }}
                                >
                                    <MaterialIcons name={item.icon} size={24} color={item.iconColor} />
                                </View>
                                <View>
                                    <Text className="text-[13px] text-[#000] font-poppins-bold">{item.text}</Text>
                                    <Text className="text-[10px] text-[#868686ff] font-poppins-medium mt-2">{item.time}</Text>
                                    <Text className="text-[10px] text-[#868686ff] font-poppins-medium">{item.venue} | {item.lecturer}</Text>
                                </View>
                            </View>
                        )}
                    />

                    <View className="">
                        <View className="flex-row justify-between items-center">
                            <View>
                                <Text className="text-[18px] font-[600] text-[#000]">Upcoming Events</Text>
                            </View>
                            <Text className="text-[12px] font-[500] font-inter text-[#0452df] font-semibold">View All</Text>
                        </View>
                    </View>

                    <FlatList
                        data={[
                            { id: 1, text: 'Data Structures & Algorithms', date: "6th, July", time: '08:00 AM - 10:00 AM', venue: 'Auditorium, Faculty of Engineering', img: dataImg, iconColor: "#a200c7ff" },
                        ]}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ gap: 16, paddingBottom: 40 }}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <View className="flex-row items-center gap-2 mt-4">
                                <View
                                    className="w-[80px] h-[50px]"
                                >
                                    <Image
                                        source={item.img}
                                        className='w-[100%] h-[100%] rounded-[10px]'
                                        resizeMode="contain"
                                    />
                                </View>
                                <View>
                                    <Text className="text-[13px] text-[#000] font-poppins-bold">{item.text}</Text>
                                    <Text className="text-[10px] text-[#868686ff] font-poppins-medium mt-2">{item.date} | {item.time}</Text>
                                    <Text className="text-[10px] text-[#868686ff] font-poppins-medium">{item.venue}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </SafeAreaView >
        </>
    )
}

export default Dashboard;



