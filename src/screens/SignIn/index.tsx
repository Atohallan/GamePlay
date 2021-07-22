import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { styles } from './styles';

// Importando componente botão
import { ButtonIcon } from '../../components/ButtonIcon';
// Importando imagem
import illustrationImg from '../../assets/illustration.png';

export function SignIn() {
    return(
        <View style={styles.container}>
            {/* Estilizando a barra de notificações */}
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <Image 
                source={illustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}> 
                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organize suas {'\n'}
                    jogatinas
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon 
                    title="Entrar com Discord" 
                    activeOpacity={0.7}
                />

            </View>
        </View>
    );
}