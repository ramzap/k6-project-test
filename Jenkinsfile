pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                echo 'Installing k6'
                sh 'gsudo chmod +x ./setup_k6.sh'
                sh 'gsudo ./setup_k6.sh'
                echo 'Running K6 performance tests...'
                sh ' k6 run ./Src/Scenarious/firstScenario.js --out influxdb=http://localhost:8086/k6'
            }
        }
    }
}
