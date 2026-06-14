# User Management

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Overview

User management handles admin user accounts, roles, and permissions.

## User List

### Features

| Feature | Specification |
|---------|---------------|
| **View** | Table view |
| **Columns** | Name, Email, Role, Status, Last Login |
| **Filtering** | By role, status |
| **Search** | Search by name or email |
| **Actions** | Edit, Delete, View |

## User Editor

### Fields

| Field | Specification |
|-------|---------------|
| **Name** | Required |
| **Email** | Required, unique |
| **Password** | Required for new users, optional for edits |
| **Role** | Required, single select |
| **Avatar** | Optional, upload or URL |
| **Is Active** | Boolean |

## Roles

| Role | Description |
|------|-------------|
| **Super Admin** | Full system access |
| **Admin** | Content management access |
| **Editor** | Content editing and publishing |
| **Author** | Create and edit own articles |
| **Reviewer** | Review articles, provide feedback |

## Authentication

### Login

| Feature | Specification |
|---------|---------------|
| **Method** | Email + password |
| **MFA** | Optional TOTP-based MFA |
| **Remember Me** | Optional, extends refresh token |
| **Rate Limiting** | 5 attempts per minute |

### Password Policy

| Rule | Specification |
|------|---------------|
| **Minimum Length** | 12 characters |
| **Complexity** | Uppercase, lowercase, number, special char |
| **Reset** | Email-based password reset |
| **Expiry** | No expiry (optional) |

### Session Management

| Rule | Specification |
|------|---------------|
| **Token Type** | JWT (HS256) |
| **Access Token** | 15 minutes expiry |
| **Refresh Token** | 7 days expiry |
| **Storage** | httpOnly cookies |
| **Max Sessions** | 3 per user |

## Account Security

| Feature | Specification |
|---------|---------------|
| **Brute Force Protection** | 5 attempts/min, 20/hour |
| **Account Lockout** | 10 failed attempts → 30 min lockout |
| **Password Reset** | Single-use token, 1 hour expiry |
| **Session Invalidation** | On password change, role change, logout |