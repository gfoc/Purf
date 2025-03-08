import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/context/ThemeContext';

const SAMPLE_REQUESTS = [
  {
    id: '1',
    user: {
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    request: 'Would love to grab coffee and chat about tech!',
    time: '2m ago',
    interests: ['Tech', 'Coffee'],
  },
  {
    id: '2',
    user: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
    request: 'Looking for a running buddy in Central Park',
    time: '15m ago',
    interests: ['Running', 'Fitness'],
  },
  {
    id: '3',
    user: {
      name: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },
    request: 'Anyone interested in joining a book club? Currently reading sci-fi novels!',
    time: '30m ago',
    interests: ['Books', 'Sci-Fi'],
  },
];

export default function RequestsScreen() {
  const { colors, theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
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
    subtitle: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: colors.subtext,
      marginTop: 2,
    },
    newButton: {
      backgroundColor: colors.primary,
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 8,
      shadowColor: colors.primary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    newButtonText: {
      color: '#fff',
      fontFamily: 'Inter-SemiBold',
      fontSize: 14,
    },
    list: {
      padding: 16,
    },
    requestCard: {
      backgroundColor: colors.card,
      borderRadius: 16,
      padding: 16,
      marginBottom: 16,
      shadowColor: theme === 'dark' ? '#000' : '#0001',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: theme === 'dark' ? 0.3 : 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
      marginBottom: 12,
    },
    requestContent: {
      flex: 1,
    },
    userInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 4,
    },
    userName: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: colors.text,
    },
    timeText: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: colors.subtext,
    },
    requestText: {
      fontSize: 15,
      fontFamily: 'Inter-Regular',
      color: colors.text,
      marginBottom: 12,
      lineHeight: 22,
    },
    interestsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 16,
      gap: 8,
    },
    interestTag: {
      backgroundColor: theme === 'dark' ? 'rgba(99, 102, 241, 0.2)' : '#EEF2FF',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
    },
    interestText: {
      color: colors.primary,
      fontSize: 12,
      fontFamily: 'Inter-SemiBold',
    },
    actionButtons: {
      flexDirection: 'row',
      gap: 12,
    },
    declineButton: {
      flex: 1,
      backgroundColor: theme === 'dark' ? '#374151' : '#F3F4F6',
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    declineButtonText: {
      color: colors.subtext,
      fontFamily: 'Inter-SemiBold',
      fontSize: 14,
    },
    acceptButton: {
      flex: 1,
      backgroundColor: colors.success,
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: 'center',
      shadowColor: colors.success,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    acceptButtonText: {
      color: '#fff',
      fontFamily: 'Inter-SemiBold',
      fontSize: 14,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Random Requests</Text>
          <Text style={styles.subtitle}>Connect with people nearby</Text>
        </View>
        <TouchableOpacity style={styles.newButton}>
          <Text style={styles.newButtonText}>New Request</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={SAMPLE_REQUESTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.requestCard}>
            <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
            <View style={styles.requestContent}>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.user.name}</Text>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
              <Text style={styles.requestText}>{item.request}</Text>
              <View style={styles.interestsContainer}>
                {item.interests.map((interest, index) => (
                  <View key={index} style={styles.interestTag}>
                    <Text style={styles.interestText}>{interest}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.declineButton}>
                <Text style={styles.declineButtonText}>Decline</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.acceptButton}>
                <Text style={styles.acceptButtonText}>Accept</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}
