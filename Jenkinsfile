pipeline {
    agent any
    
    environment {
        // Definisi variabel lingkungan jika diperlukan
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout kode dari repositori
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install dependencies menggunakan npm
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                // Build proyek CSS jika diperlukan
                // Misalnya: sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                // Jalankan langkah-langkah tes jika diperlukan
                // Misalnya: sh 'npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                // Tambahkan langkah-langkah deploy sesuai kebutuhan proyek Anda
            }
        }
    }
    
    post {
        success {
            // Tindakan yang akan diambil jika pipeline berhasil
            echo 'Build and deployment successful!'
        }
        failure {
            // Tindakan yang akan diambil jika pipeline gagal
            echo 'Build or deployment failed!'
        }
        always {
            // Tindakan yang akan diambil selalu, baik berhasil atau gagal
            echo 'Pipeline completed!'
        }
    }
}
