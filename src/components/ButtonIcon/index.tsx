import React from "react";
import { Text, Image, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

// Importando todas as propriedades 
type Props = RectButtonProps & {
    title: string; 
    // Caso não queira que essa propriedade 
    // seja obrigatória é só inserir "?":
    // title?:string;
}

// Importando primeiro as propriedades criadas e depois todo o resto das TouchableOpacityProps
export function ButtonIcon({ title, ...rest } : Props){
    return(
        <RectButton 
        style={styles.container}
        { ...rest } // Importando as propriedades RectButtonProps
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                { title }
            </Text>
        </RectButton>
    )
}