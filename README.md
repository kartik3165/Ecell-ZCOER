# Project Installation Guide



## Step 1: Clone the Repository 
```sh
git clone <repository_url>
cd <project_directory>
```

## Step 2: Create and Activate a Virtual Environment
### For Windows (Command Prompt)
```sh
python -m venv env
env\Scripts\activate
```
### For macOS/Linux
```sh
python3 -m venv env
source env/bin/activate
```

## Step 3: Install Dependencies
Ensure you have a `requirements.txt` file in the project directory, then run:
```sh
pip install -r requirements.txt
```

## Step 4: Set Up the Database
Run migrations to apply database schema changes:
```sh
python manage.py migrate
```

## Step 5: Create a Superuser
```sh
python manage.py createsuperuser
```
Follow the prompts to create an admin account.

## Step 6: Run the Development Server
```sh
python manage.py runserver
```
Access the project at `http://127.0.0.1:8000/`.

## Step 7: Collect Static Files 
```sh
python manage.py collectstatic
```

## Step 8: Deactivate the Virtual Environment
### For Windows
```sh
env\Scripts\deactivate
```
### For macOS/Linux
```sh
deactivate
```


# E-Cell Website Development Checklist

## 1. Public Pages

### 1.1 Home Page
- [x] Hero section with E-Cell mission
- [ ] Navigation menu
- [x] Featured upcoming events display
- [ ] Latest blog posts preview section
- [ ] Quick links section
- [x] Social media integration
- [x] Mobile responsive layout

### 1.2 About Us Page
- [x] Mission and vision section
- [x] History section
- [ ] Achievements display
- [x] Key objectives listing
- [ ] Partnership/collaboration section

### 1.3 Team Section
- [x] Team grid layout
- [ ] Role/department filtering system
- [x] Individual Team Member Pages:
  - [x] Profile picture upload/display
  - [x] Role and responsibilities section
  - [ ] Social media links
  

### 1.4 Events Section
#### Upcoming Events Page
- [x] List view with event details
- [ ] Registration/RSVP system
- [x] Event categorization
- [x] Category filtering system

#### Past Events Page
- [x] Events archive system
- [x] Photo gallery implementation
- [x] Event highlights section
- [ ] Testimonials system
- [ ] Feedback collection system

#### Individual Event Pages
- [x] Event description template
- [x] Date/time/venue display
- [x] Speaker profiles section
- [ ] Registration form system
- [x] Event schedule display
- [ ] Related resources section

### 1.5 Contact Page
- [ ] Contact form implementation
- [ ] Map integration
- [ ] Contact information display
- [ ] Social media links
- [ ] FAQ section

### 1.6 Blog Section
- [x] Article listing with pagination
- [x] Category system
- [x] Tag system
- [ ] Search functionality
- [ ] Social sharing buttons
- [x] Author information display
- [ ] Comments system

## 2. Members-Only Features

### 2.1 User Authentication
- [ ] Login system
- [ ] Logout functionality
- [ ] Password reset system
- [ ] Member profile management
- [ ] Role-based access control

### 2.2 Study Material Repository
- [ ] Resource organization system
- [ ] Document preview feature
- [ ] Download system
- [ ] Search functionality
- [ ] Filter options
- [ ] Content categorization

## 3. Technical Implementation

### 3.1 Frontend
- [x] Responsive design implementation
- [x] Cross-browser compatibility testing
- [x] Accessibility compliance verification
- [x] Mobile-first approach
- [x] UI/UX optimization

### 3.2 Backend
- [ ] User authentication setup
- [ ] Database implementation
- [x] File storage system
- [x] Content management system
- [ ] API endpoints

### 3.3 Security
- [ ] SSL certificate installation
- [ ] Data encryption implementation
- [ ] Secure file upload/download system
- [ ] Security vulnerabilities protection
- [ ] Security updates system

## 4. Additional Features

### 4.1 Content Management
- [x] Admin panel setup
- [ ] Content scheduling system
- [ ] Media library
- [ ] User role management
- [ ] Analytics integration

### 4.2 Analytics and Tracking
- [ ] Google Analytics setup
- [ ] Event tracking implementation
- [ ] User behavior tracking
- [ ] Performance monitoring

## 5. Final Deliverables
- [ ] Complete website deployment
- [ ] Mobile responsive design verification
- [ ] Admin panel functionality testing
- [ ] User documentation
- [ ] Content migration
- [ ] Final testing and QA
