import * as React from 'react';
import { Platform, View, StyleSheet, Text as RNText, Image, TouchableOpacity } from 'react-native';
import DSAvatar from './DSAvatar';

export type DSHeaderProps = {
  title?: string;
  logoSrc?: any;
  userName?: string;
  userAvatarSrc?: any;
  onAvatarPress?: () => void;
  style?: any;
};

export function DSHeader({ title = 'Shot Tracker', logoSrc, userName, userAvatarSrc, onAvatarPress, style }: DSHeaderProps) {
  return (
    <View style={[styles.header, style]}>
      <View style={styles.left}>
        {logoSrc && <Image source={logoSrc} style={styles.logo} />}
        <RNText style={styles.title}>{title}</RNText>
      </View>
      <View style={styles.right}>
        {userName && <RNText style={styles.userName}>{userName}</RNText>}
        <TouchableOpacity onPress={onAvatarPress} style={styles.avatarBtn}>
          <DSAvatar size={32} source={userAvatarSrc} label={userName ? userName[0] : undefined} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 12,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: '#111827',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#111827',
    marginRight: 12,
  },
  avatarBtn: {
    borderRadius: 16,
    overflow: 'hidden',
  },
});

export default DSHeader; 