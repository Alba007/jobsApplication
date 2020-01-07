package jobsappbackend.demo.repos;

import jobsappbackend.demo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.jws.soap.SOAPBinding;
import java.util.Optional;

@Repository
public interface UserRepos extends JpaRepository<User, String> {
    User findByUsername(String username);

    Optional<User> findById(long id);
}
