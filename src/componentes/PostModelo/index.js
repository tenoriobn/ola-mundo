import React from 'react';
import styles from './PostModelo.module.css'

export default function PostModelo( {children, fotoCapa, titulo} ) {
    return (
        <artcile className={styles.postModeloContainer}>
            <div className={styles.fotoCapa} style={{backgroundImage: `url(${fotoCapa})`}}>
            </div>

            <h2 className={styles.titulo}>
                {titulo}
            </h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </artcile>
    )
}
