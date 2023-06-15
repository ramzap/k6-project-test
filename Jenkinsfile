pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                echo 'Installing k6'
                sh 'sudo chmod +x setup_k6.sh'
                sh 'sudo ./setup_k6.sh'
                echo 'Running K6 performance tests...'
                sh ' k6 run ./Src/Scenarious/firstScenario.js --out influxdb=http://influxdb:8086/k6'
            }
        }
    }
}
