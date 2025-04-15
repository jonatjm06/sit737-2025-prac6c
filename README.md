# SIT737 Task 6.2C – Interacting with Kubernetes (Credit Task)

> Extension of Task 6.1P – Demonstrating Kubernetes interaction and live update of a deployed Node.js application.

---

## ✅ Overview
This project extends a previously deployed Kubernetes-based cloud penetration testing toolkit by:
- Interacting with the deployed cluster via `kubectl` and port-forwarding.
- Updating the backend Node.js service.
- Redeploying the new version to the cluster and verifying the update.

---

## 🔧 Part I – Interacting with the Cluster

### 1. Check Pod and Service Status
```bash
kubectl get pods
kubectl get services
```

### 2. Access Application Using Port Forwarding
```bash
kubectl port-forward service/frontend-service 8090:80
```
Visit the app in browser:
```
http://localhost:8090
```

---

## 🔁 Part II – Updating the Frontend

### 1. Modify Node.js Frontend Code and add a new card

### 2. Rebuild Docker Image with New Version Tag
```bash
cd frontend
docker build -t your-dockerhub/frontend:v2 .
docker push your-dockerhub/frontend:v2
```

### 3. Update Kubernetes Deployment
#### Option A: Update `frontend-deployment.yaml`
```yaml
containers:
  - name: frontend
    image: your-dockerhub/frontend:v2
```
Then apply it:
```bash
kubectl apply -f k8s/frontend-deployment.yaml
```

### 4. Verify the Update
```bash
kubectl get pods
```
Reopen the app and new card has been added


