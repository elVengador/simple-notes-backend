# API to Notes App
## routes

### auth
```
POST: /api/v1/auth/sign-up
POST: /api/v1/auth/sign-in
```

### /user
```
POST: /api/v1/user
GET: /api/v1/user
GET: /api/v1/user/:id
PUT /api/v1/user/:id
DELETE /api/v1/user/:id
```

### /tag
```
POST: /api/v1/tag
GET: /api/v1/tag/user/:user
GET: /api/v1/tag/:id
PUT: /api/v1/tag/:id
DELETE: /api/v1/tag/:id
```

### /notes
```
POST: /api/v1/note
GET: /api/v1/note/user/:user
GET: /api/v1/note/:id
PUT: /api/v1/note/:id
DELETE: /api/v1/note/:id
```