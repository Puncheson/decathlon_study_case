import { TUserProfile } from 'shared/api';
import { classNames } from 'shared/lib/classNames/classNames';
import { dateTransformer } from 'shared/lib/dateTransformer/dateTransformer';
import cls from './ProfileCard.module.scss'

interface  IProfileCardProps {
    className?: string
    user: TUserProfile
}
export const ProfileCard = ({ className, user } : IProfileCardProps) => {

    const {
        title, 
        firstName, 
        lastName, 
        picture, 
        id, 
        gender, 
        email, 
        phone, 
        dateOfBirth, 
        registerDate, 
        updatedDate, 
        location,
        } = user
return (

    <div className={classNames(cls.ProfileCard, {}, [className])}>
        <div className={cls.userPhoto}>
            <span>{title} {firstName} {lastName}</span>
            <img src={picture} alt={firstName} />
            <span>ID: ({id})</span>
        </div>
        <div className={cls.userData}>
            <span className={cls.title}>About:</span>
            <span>Gender: {gender}</span>
            <span>Date of Birth: {dateTransformer(dateOfBirth)}</span>
            <span>Email: {email}</span>
            <span>Phone: {phone}</span>
            <span>Register Date: {dateTransformer(registerDate)}</span>
            <span>Last update: {dateTransformer(updatedDate)}</span>

        </div>

        <div className={cls.userAdress}>
            <span className={cls.title}>Location:</span>
            <span>Country: {location.country}</span>
            <span>City: {location.city}</span>
            <span>State: {location.state}</span>
            <span>Street: {location.street}</span>
            <span>Time zone: {location.timezone}</span>
        </div>
    </div>
);
}