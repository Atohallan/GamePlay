import React from "react";
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

// Importando todas as propriedades 
type Props = TouchableOpacityProps & {
    title: string; 
    // Caso não queira que essa propriedade 
    // seja obrigatória é só inserir "?":
    // title?:string;
}

// Importando primeiro as propriedades criadas e depois todo o resto das TouchableOpacityProps
export function ButtonIcon({ title, ...rest } : Props){
    return(
        <TouchableOpacity 
        style={styles.container}
        { ...rest } // Importando as propriedades TouchableOpacityProps
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                { title }
            </Text>
        </TouchableOpacity>
    )
}