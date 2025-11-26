package ro.msg.learning.shop.mapper;

import ro.msg.learning.shop.dto.UserProfileDTO;
import ro.msg.learning.shop.entity.UserAccount;

public class UserMapper {

    public static UserProfileDTO toProfileDTO(UserAccount user) {
        if (user == null) return null;

        return new UserProfileDTO(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getUsername(),
                user.getEmail(),
                user.getUserRole().name()
        );
    }
}
