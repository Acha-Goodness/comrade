import { Ionicons, MaterialCommunityIcons, Octicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, View, Text } from 'react-native';


const DashLayout = () => {
    return (
        <>
            {/* {Platform.OS === "ios" ? (
                <View style={{ height: "5%", backgroundColor: "#ffffff" }}>
                    <StatusBar style="dark" />
                </View>
            ) : (
                <View style={{ height: "5%", backgroundColor: "#ffffff" }}>
                    <StatusBar style="dark" />
                </View>
            )} */}
            <StatusBar style="dark" />
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        paddingTop: "5%",
                        paddingHorizontal: "5%",
                        borderRadius: 50,
                        backgroundColor: "#ffffff",
                        position: "absolute",
                        bottom: 30,
                        width: "90%",
                        marginHorizontal: "5%",
                        // iOS shadow
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 8 },
                        shadowOpacity: 0.15,
                        shadowRadius: 12,

                        // Android shadow
                        elevation: 10,
                    },
                }}
            >
                <Tabs.Screen
                    name="dashboard"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                className={`flex-row items-center w-[80px] justify-center h-10 px-4 rounded-[10px]
                                ${focused ? "bg-[#0452df]" : "bg-transparent"}`}
                            >
                                <Octicons
                                    name="home-fill"
                                    size={focused ? 18 : 24}
                                    color={focused ? "#FFFFFF" : "#0452df"}
                                />

                                {focused && (
                                    <Text className="text-white font-semibold text-sm ml-2">
                                        Home
                                    </Text>
                                )}
                            </View>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="ajo"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                className={`flex-row items-center w-[80px] justify-center h-10 px-4 rounded-[10px]
                                ${focused ? "bg-[#0452df]" : "bg-transparent"}`}
                            >
                                <FontAwesome5
                                    name="building"
                                    size={focused ? 18 : 24}
                                    color={focused ? "#FFFFFF" : "#0452df"}
                                />
                                {focused && (
                                    <Text className="text-white font-semibold text-sm ml-2">
                                        Campus
                                    </Text>
                                )}
                            </View>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="thrift"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                className={`flex-row items-center w-[80px] justify-center h-10 px-4 rounded-[10px]
                                ${focused ? "bg-[#0452df]" : "bg-transparent"}`}
                            >
                                <MaterialIcons
                                    name="shopping-cart"
                                    size={focused ? 18 : 24}
                                    color={focused ? "#FFFFFF" : "#0452df"}
                                />

                                {focused && (
                                    <Text className="text-white font-semibold text-sm ml-2">
                                        Market
                                    </Text>
                                )}
                            </View>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="wallet"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                className={`flex-row items-center w-[88px] justify-center h-10 px-4 rounded-[10px]
                                ${focused ? "bg-[#0452df]" : "bg-transparent"}`}
                            >
                                <MaterialCommunityIcons
                                    name="message-text-fast"
                                    size={focused ? 18 : 24}
                                    color={focused ? "#FFFFFF" : "#0452df"}
                                />

                                {focused && (
                                    <Text className="text-white font-semibold text-sm ml-2">
                                        Message
                                    </Text>
                                )}
                            </View>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="profile"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                className={`flex-row items-center w-[80px] justify-center h-10 px-4 rounded-[10px]
                                ${focused ? "bg-[#0452df]" : "bg-transparent"}`}
                            >
                                <MaterialCommunityIcons
                                    name="account-school"
                                    size={focused ? 18 : 24}
                                    color={focused ? "#FFFFFF" : "#0452df"}
                                />

                                {focused && (
                                    <Text className="text-white font-semibold text-sm ml-2">
                                        Profile
                                    </Text>
                                )}
                            </View>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="createThrift"
                    options={{
                        href: null,
                        tabBarStyle: { display: 'none' }
                    }}
                />

                <Tabs.Screen
                    name="createAjo"
                    options={{
                        href: null,
                        tabBarStyle: { display: 'none' }
                    }}
                />

                <Tabs.Screen
                    name="statistics"
                    options={{
                        href: null,
                        tabBarStyle: { display: 'none' }
                    }}
                />

                <Tabs.Screen
                    name="kycLevel"
                    options={{
                        href: null,
                        tabBarStyle: { display: 'none' }
                    }}
                />

                <Tabs.Screen
                    name="kycVerification"
                    options={{
                        href: null,
                        tabBarStyle: { display: 'none' }
                    }}
                />

                <Tabs.Screen
                    name="ninVerification"
                    options={{
                        href: null,
                        tabBarStyle: { display: 'none' }
                    }}
                />

                <Tabs.Screen
                    name="addressVerification"
                    options={{
                        href: null,
                        tabBarStyle: { display: 'none' }
                    }}
                />

                <Tabs.Screen
                    name="kycSuccess"
                    options={{
                        href: null,
                        tabBarStyle: { display: 'none' }
                    }}
                />

            </Tabs>
        </>
    )
}

export default DashLayout;