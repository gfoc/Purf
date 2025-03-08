import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, CreditCard as Edit3, Bell, Shield, CircleHelp as HelpCircle, LogOut, Sun, Moon } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import Animated, { withSpring, useAnimatedStyle } from 'react-native-reanimated';

const PROFILE_MENU_ITEMS = [
  { icon: Settings, label: 'Settings', color: '#6366F1' },
  { icon: Edit3, label: 'Edit Profile', color: '#10B981' },
  { icon: Bell, label: 'Notifications', color: '#F59E0B' },
  { icon: Shield, label: 'Privacy', color: '#3B82F6' },
  { icon: HelpCircle, label: 'Help & Support', color: '#8B5CF6' },
  { icon: LogOut, label: 'Logout', color: '#EF4444' },
];

const TOGGLE_SIZE = 32;
const TOGGLE_WIDTH = 64;

export default function ProfileScreen() {
  const { theme, toggleTheme, colors } = useTheme();

  const ballStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(theme === 'dark' ? TOGGLE_WIDTH - TOGGLE_SIZE : 0, {
            mass: 1,
            damping: 15,
            stiffness: 120,
          }),
        },
      ],
    };
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      padding: 16,
      backgroundColor: colors.card,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    title: {
      fontSize: 24,
      fontFamily: 'Inter-Bold',
      color: colors.text,
    },
    profileSection: {
      alignItems: 'center',
      padding: 24,
      backgroundColor: colors.card,
    },
    profileImage: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginBottom: 16,
    },
    name: {
      fontSize: 24,
      fontFamily: 'Inter-Bold',
      color: colors.text,
      marginBottom: 4,
    },
    bio: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: colors.subtext,
      marginBottom: 16,
    },
    statsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme === 'light' ? '#F9FAFB' : '#374151',
      borderRadius: 12,
      padding: 16,
      width: '100%',
    },
    statItem: {
      flex: 1,
      alignItems: 'center',
    },
    statDivider: {
      width: 1,
      height: 24,
      backgroundColor: colors.border,
    },
    statNumber: {
      fontSize: 20,
      fontFamily: 'Inter-Bold',
      color: colors.text,
      marginBottom: 4,
    },
    statLabel: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: colors.subtext,
    },
    menuSection: {
      backgroundColor: colors.card,
      marginTop: 16,
      paddingVertical: 8,
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
    },
    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
    },
    menuLabel: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: colors.text,
    },
    themeSwitch: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.card,
      padding: 16,
      marginTop: 16,
    },
    themeSwitchLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    toggleContainer: {
      width: TOGGLE_WIDTH,
      height: TOGGLE_SIZE,
      borderRadius: TOGGLE_SIZE / 2,
      backgroundColor: theme === 'light' ? '#E5E7EB' : '#4B5563',
      justifyContent: 'center',
      padding: 2,
    },
    toggleBall: {
      width: TOGGLE_SIZE - 4,
      height: TOGGLE_SIZE - 4,
      borderRadius: (TOGGLE_SIZE - 4) / 2,
      backgroundColor: theme === 'light' ? '#fff' : '#818CF8',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    themeIcon: {
      marginRight: 12,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
        </View>

        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.bio}>Software Developer | Coffee Enthusiast</Text>
          
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Requests</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>156</Text>
              <Text style={styles.statLabel}>Connections</Text>
            </View>
          </View>
        </View>

        <View style={styles.themeSwitch}>
          <View style={styles.themeSwitchLeft}>
            {theme === 'light' ? (
              <Sun size={24} color={colors.primary} style={styles.themeIcon} />
            ) : (
              <Moon size={24} color={colors.primary} style={styles.themeIcon} />
            )}
            <Text style={styles.menuLabel}>Theme</Text>
          </View>
          <Pressable onPress={toggleTheme}>
            <View style={styles.toggleContainer}>
              <Animated.View style={[styles.toggleBall, ballStyle]} />
            </View>
          </Pressable>
        </View>

        <View style={styles.menuSection}>
          {PROFILE_MENU_ITEMS.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={[styles.iconContainer, { backgroundColor: `${item.color}15` }]}>
                <item.icon size={20} color={item.color} />
              </View>
              <Text style={styles.menuLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
